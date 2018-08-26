window.onload = () => {

    //alert('Login');
    //new RiderLogin();
    
 
  var login_buttonEl = document.getElementById('login_submit');
   if(login_buttonEl){
        login_buttonEl.addEventListener('click', function(){
            //console.log('Login');
            new RiderLogin();
        });
   }else{

   }

};

class RiderLogin{

    constructor(){

        this.riderController = new RiderController();
        this.username = document.getElementById('login_uname').value;
        this.password = document.getElementById('login_password').value;
        //console.log(this.username, this.password );
        this.login(this.username,this.password);
        
    }

   login(username, password){
    this.riderController.login(username,password);
   }
}