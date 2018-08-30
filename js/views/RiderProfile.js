window.onload = () => {
    //alert("rider profile");
    new RiderProfile();
};

class RiderProfile{

    constructor(){

        this.currRider = currentRiderObj;
        this.loadDOM();
    }

    loadDOM(){
        console.log(this.currRider);
    }
}