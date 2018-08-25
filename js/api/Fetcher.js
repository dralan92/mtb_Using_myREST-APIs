/*window.onload = () => {
    alert("fetcher");
};*/

class Fetcher{

    constructor(){

        if(!Fetcher.instance){
            Fetcher.instance = this;

        }

        this.baseUrl = 'https://blooming-mesa-21883.herokuapp.com';
        return Fetcher.instance;
    }

    async fetch(url){
        try{
    
            const fetchedData = await fetch(`${this.baseUrl}/${url}`);
           
            const data = await fetchedData.json();
            
            return data;
    
        }catch(err){
           console.log(err);
        }
    
    }

    async post(url, data){

  

        try{
            
            const posting = await window.fetch(`${this.baseUrl}/${url}`,{

                method: 'POST',
                body:JSON.stringify(data),
                headers:{'Content-Type': 'application/json'}

            });

       

            const result = await posting.json();
            return result;
           

        }catch(err){

            console.log(err);

        }

    }
    
}


const fetcherObject = new Fetcher();
Object.freeze(Fetcher);