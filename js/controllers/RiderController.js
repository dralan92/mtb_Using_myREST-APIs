/*window.onload = () => {
    alert("rider controller");
};*/

class RiderController{

    constructor(){
        this.fetcher = fetcherObject;   
    }

    async all(){
        const data = await this.fetcher.fetch('riders');
       
        const RiderObjs = data.riders.map(d=> new Rider(d)); 
        
        return RiderObjs;
    }

    async create(rider){

        const data = rider.properties;
        console.log('Data to be posted is : '+ data);
        const result = await this.fetcher.post('riders', data);
        return result;
    }

    async login(username, password){

        const data = await this.fetcher.fetch('riders');
        console.log(username);
        console.log(password);
       
        const RiderObjs = data.riders.map((d)=>{

            var tempRider = new Rider(d);
            

            if(username == tempRider.properties.username &&
                password == tempRider.properties.password){

                    console.log('UserExists');
                    window.location.href = "index.html";
                    
                }else{
                    //console.log('UserDoesntExists');
                }
                

        }); 


    }
}

