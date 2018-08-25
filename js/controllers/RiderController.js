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
}

