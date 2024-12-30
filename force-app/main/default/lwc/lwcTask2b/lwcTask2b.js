import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import AccountId from '@salesforce/schema/Account.AccountId'

export default class AccountEditForm extends LightningElement {
    accountid=this.accountid;
    selectedvalue;

    handleAccountChange(event){
        this.selectvalue=event.target.value;
    }
    clicked(){
        console.log(this.selectvalue);
    }
   
}