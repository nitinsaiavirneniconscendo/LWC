import { LightningElement } from 'lwc';

export default class LWCTask extends LightningElement {
    name='';
    lastname='';
    email='';
    phonenumber='';
    buttoncolor='normal-button';

 


    handleNameChange(event){
        this.name = event.target.value;

    }
    handleLastNameChange(event){
        this.lastname=event.target.value;
    }
    handleEmailChange(event){
        this.email=event.target.value;
    }
    handlePhoneNumberChange(event){
        this.phonenumber=event.target.value;
    }


    handleButtonClick(){
        this.buttoncolor='clicked-button';
    
        console.log(this.name);
        console.log(this.lastname);
        console.log(this.email);
        console.log(this.phonenumber);


    }
}