import { HttpClient } from '@angular/common/http
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Datar {

  constructor(public http: HttpClient,public storage:Storage  ) {
    console.log('Hello DataProvider Provider');
  }

  get Data(key) {
    return.this.storage.get(key)

  }
  save(key,data){
    this.storage.set(key, data)
  }

}
