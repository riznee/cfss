import { Component } from '@angular/core';
<<<<<<< HEAD
import { ModalController, NavController } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {Appointmentaddpage} from '../appointmentadd/appointmentadd';
import {Appointmentviewpage} from '../appointmentview/appointmentview';



=======
import { NavController } from 'ionic-angular';
import {Addappoitment} from './addappoint/addappoint';
>>>>>>> 97ba2f39e96ec0880c86d69c3bade89acbe8b9ad
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html'
})
export class Appointmentpage {
<<<<<<< HEAD
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
=======
  public items=[];
  var key ="appointment";
  constructor(public navCtrl: NavController) {
>>>>>>> 97ba2f39e96ec0880c86d69c3bade89acbe8b9ad

  }
  ionViewDidLoad(){

    }

    addItem(){

      let addModal = this.modalCtrl.create(AddItemPage);

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

    }

<<<<<<< HEAD
  saveItem(item){
    this.items.push(item);
  }


  viewItem(item){
  this.navCtrl.push(Appointmentviewpage, {
    item: item
  });
}

=======
>>>>>>> 97ba2f39e96ec0880c86d69c3bade89acbe8b9ad
}
