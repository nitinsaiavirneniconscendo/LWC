import { LightningElement ,track} from 'lwc';

export default class LwcTask2a extends LightningElement {
   

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

        try {
            if (this.Account.Name.length < 4) {
                console.log(this.Account.Name.length < 4 && this.Account.Name.length > 15);
                this.nameerror = "Please enter a valid name length";
               alert(this.nameerror);

                return;
            }
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