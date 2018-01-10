import { Injectable } from '@angular/core';
//import { AbstractStorageService } from './abstract.storage.service';
import {NativeStorage} from '@ionic-native/native-storage';

const STORAGE_KEY"recipe";

@Injectable()





export class DietService extends AbstractStorageService {
  protected type: string = 'diet';

  constructor( public storage:Storage){ }

  getAllrecipe(){
    return this.storage.gets(STORAGE_KEY);
  }

  addrecipe(){

  }


}
