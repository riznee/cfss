import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Addappoitment} from './addappoint/addappoint';
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html'
})
export class Appointmentpage {
  public items=[];
  var key ="appointment";
  constructor(public navCtrl: NavController) {

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

}
