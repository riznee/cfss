import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'addappoint',
  templateUrl: 'addappoint.html'
})
export class AddItemPage {
  var key="appointment";
  title: string;
  description: string;

  constructor(public navCtrl: NavController, public view: ViewController) {

  }

  saveItem(){

      let newItem = {
      title: this.title,
      description: this.description
    };

    this.view.dismiss(key,newItem);

  }

  close(){
    this.view.dismiss();
  }

}
