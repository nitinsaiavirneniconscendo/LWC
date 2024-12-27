import { LightningElement, track } from 'lwc';
import insertAccounts from "@salesforce/apex/InsertAccountDetails.insertAccounts"

export default class LwcTask2 extends LightningElement {
   @track Account={
        Name:"",
        Street:"",
        Country:"", 
        City:"",
        Province:"",
        PostalCode:"",
        Description:""
    }
    handleChangeName(event)
    {  this.Account.Name=event.target.value;} 

  handleChangeAddress(event){
    this.Account.Street=event.target.street;
    this.Account.City=event.target.city;
    this.Account.Country=event.target.country;
    this.Account.Province=event.target.province;
    this.Account.PostalCode=event.target.postalCode;





}
    handleChangeDescription(event){
        this.Account.Description=event.target.value;


    }

    handleSavebutton(){
        // console.log('Name :' + JSON.stringify(this.Account.Name));
        // console.log('Street :' + JSON.stringify(this.Account.Street));
        // console.log('City :' + JSON.stringify(this.Account.City));
        // console.log('Country :' + JSON.stringify(this.Account.Country));
        // console.log('Province :' + JSON.stringify(this.Account.Province));
        // console.log('PostalCode :' + JSON.stringify(this.Account.PostalCode));
        // console.log('Description :' + JSON.stringify(this.Account.Description));
        try {
            console.log('Save button clicked');
             insertAccounts({
                name: this.Account.Name,
                street: this.Account.Street,
                country: this.Account.Country,
                city: this.Account.City,
                province: this.Account.Province,
                postalCode: this.Account.PostalCode,
                description: this.Account.Description
            });
            console.log('Account inserted successfully');
        } catch (error) {
            console.error('Error inserting account:', error);
        }

      
    }
   
   
}