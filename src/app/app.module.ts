import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/* own file
*/
//import { DietService } from '../services/diet.service';
import { Dietpage } from '../pages/diet/diet';
import {Appointmentpage}from '../pages/appointment/appointment';
import {Newspage}from '../pages/news/news';
import {Doctorpage}from '../pages/doctor/doctor';
import {Settingpage}from '../pages/setting/setting';
import {Dairypage}from '../pages/dairy/dairy';
import { DataProvider } from '../providers/data/data';
//import {Addappoitment} from '../pages/appointment/addappoint/addappoint';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Dietpage,
    Appointmentpage,
    Newspage,
    Doctorpage,
    Settingpage,
    Dairypage,
    //Addappoitment

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Dietpage,
    Appointmentpage,
    Newspage,
    Doctorpage,
    Settingpage,
    Dairypage,
  //  Addappoitment
  ],
  providers: [
    StatusBar,
    SplashScreen,


    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
