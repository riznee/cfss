import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'appointmentview',
  templateUrl: 'appointmentview.html'
})
export class Appointmentviewpage {

    appointmenttype;
    description;
    datez;
    constructor(public navParams: NavParams){

    }

    ionViewDidLoad() {
      this.appointmenttype = this.navParams.get('item').appointmenttype;
      this.description = this.navParams.get('item').description;
    //  this.datez = this.navParams.get('item').datez;
      //console.log();
    }

}
