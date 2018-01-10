import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {Appointmentaddpage} from '../appointmentadd/appointmentadd';
import {Appointmentviewpage} from '../appointmentview/appointmentview';



@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html'
})
export class Appointmentpage {
  public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ionViewDidLoad(){

    this.items = [
      {appointmenttype: 'hi1', description: 'test1'},
      {appointmenttype: 'hi2', description: 'test2'},
      {appointmenttype: 'hi3', description: 'test3'}
    ];
  }

  addappoint(){

    let addModal = this.modalCtrl.create(Appointmentaddpage);

    addModal.onDidDismiss((item) => {

          if(item){
            this.saveItem(item);
          }

    });


    addModal.present();

  }

  saveItem(item){
    this.items.push(item);
  }


  viewItem(item){
  this.navCtrl.push(Appointmentviewpage, {
    item: item
  });
}

}
