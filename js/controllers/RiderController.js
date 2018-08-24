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
}

