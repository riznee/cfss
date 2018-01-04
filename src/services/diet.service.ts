import { Injectable } from '@angular/core';
import { AbstractStorageService } from './abstract.storage.service';

@Injectable()

export class DietService extends AbstractStorageService {
  protected type: string = 'diet';

  constructor() {
    let diets = [
      {
        id: 1,
        name: 'Banana',
        calories: 234
      },
      {
        id: 2,
        name: 'Apple',
        calories: 233
      }
    ];

    this.storeList(diets);
  }

  
}
