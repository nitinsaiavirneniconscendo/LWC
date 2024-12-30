import { LightningElement ,track} from 'lwc';

export default class LwcTask2 extends LightningElement {
    @track btninsert=false;
    @track btnupdate=false;
///lwctask2a closing
    @track close1=true;

    
    onclose1(){
        this.close1=false;
    }

    Oninsert(){
        this.btninsert=true;
    }
    Onupdate(){
        this.btnupdate=true;
    }
}