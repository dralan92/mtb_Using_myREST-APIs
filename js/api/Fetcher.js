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
            console.log(fetchedData);
            console.log(`${this.baseUrl}/${url}`);
            const data = await fetchedData.json();
            console.log(fetchedData + "In Json");
            return data;
    
        }catch(err){
           console.log(err);
        }
    
    }
    
}


const fetcherObject = new Fetcher();
Object.freeze(Fetcher);