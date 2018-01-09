import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'appointmentview',
  templateUrl: 'appointmentview.html'
})
export class Appointmentviewpage {

    title;
    description;
    datez;
    constructor(public navParams: NavParams){

    }

    ionViewDidLoad() {
      this.title = this.navParams.get('item').title;
      this.description = this.navParams.get('item').description;
    }

}
