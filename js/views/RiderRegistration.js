window.onload = () => {

    
    
    var buttonEl = document.getElementById('reg-button');
    if(buttonEl){
        buttonEl.addEventListener('click', function(){
            
            new RiderRegistration()
        },false);
    }else{

    }
    
 

};




class RiderRegistration{

    constructor(){

        this.riderController = new RiderController();
        this.rider = new Rider({

            'username' : document.getElementById('uname').value,
            'password' : document.getElementById('pwd').value,
            'zip': document.getElementById('zip').value,
            'address': document.getElementById('add').value,

            'email': document.getElementById('email').value,
            'gender': document.getElementById('gender').value,
            'dateOfBirth': document.getElementById('dob').value,
            'phone': document.getElementById('phone').value
        });
        

       
        this.register(this.rider);
    }

   

    register(rider){

       
        this.riderController.create(rider);

    }
}