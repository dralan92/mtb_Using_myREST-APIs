/*window.onload = () => {
    alert("rider model");
};*/

class Rider extends Model{

    constructor(properties){

        super(properties.username, properties.email);

        this.properties = {

            username : properties.username,
            password : properties.password,
            zip: properties.zip,
            address: properties.address,

            email: properties.email,
            gender: properties.gender,
            dateOfBirth: properties.dateOfBirth,
            phone: properties.phone
        }

    }
}