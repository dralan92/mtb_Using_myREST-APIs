/*window.onload = () => {
    alert("model");
};*/

class Model{

    constructor(...required){
        if(required.includes(undefined)){
            throw new Error('Invalid Data');
        }
    }

}