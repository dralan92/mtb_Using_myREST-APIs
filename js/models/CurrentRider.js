class CurrentRider{

    constructor(){

       

        

            this.username ='uname';
            this.password ='pass';
            this.zip='zip';
            this.address='add';

            this.email='em';
            this.gender='gen';
            this.dateOfBirth = 'dob';
            this.phone = 'ph';
       

        if(!CurrentRider.instance){
            CurrentRider.instance = this;

        }

        return CurrentRider.instance;
    }

    set_current_rider(uname, pass, zip, add, em, gen, dob, ph){

        this.username =uname;
            this.password =pass;
            this.zip=zip;
            this.address=add;

            this.email=em;
            this.gender=gen;
            this.dateOfBirth = dob;
            this.phone = ph;

       ;
    }
}

const currentRiderObj = new CurrentRider();