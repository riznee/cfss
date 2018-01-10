import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { DietService } from '../../services/diet.service';

@Component({
  selector: 'diet',
  templateUrl: 'diet.html'
})
export class Dietpage {
  public diets;
  constructor(public navCtrl: NavController) {
  };


}
