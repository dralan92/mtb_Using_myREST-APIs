window.onload = () => {
    new RiderView();
};

class RiderView{

    constructor(){
        this.riderController = new RiderController();
        this.loadDOM();
        this.loadData();
    }

    loadDOM(){

        this.ridersEl = document.querySelector('#rider-data');

    }

    loadData(){

        this.riderController.all().then(riderObjects =>{

            const ridersTableViewBody = riderObjects.map(riderObj=>{
                return `
                    <tr>
                        <td>${riderObj.properties.username}</td>
                        <td>${riderObj.properties.password}</td>
                        <td>${riderObj.properties.zip}</td>
                        <td>${riderObj.properties.address}</td>

                        <td>${riderObj.properties.email}</td>
                        <td>${riderObj.properties.gender}</td>
                        <td>${riderObj.properties.dateOfBirth}</td>
                        <td>${riderObj.properties.phone}</td>
                    </tr>
                `;
            }).join('');

            this.ridersEl.innerHTML = ridersTableViewBody;

        });
        
        

    }
}