import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-appointmentadd',
  templateUrl: 'appointmentadd.html'


})
export class Appointmentaddpage {
  appointmenttype: string;
  description: string;
  datez:string
  constructor(public navCtrl: NavController,public view: ViewController) {

  }



  saveItem(){

    let newItem = {
      appointmenttype: this.appointmenttype,
      description: this.description,
      datez: this.datez
    };

    this.view.dismiss(newItem);

  }
  close(){
    this.view.dismiss();
  }
};
