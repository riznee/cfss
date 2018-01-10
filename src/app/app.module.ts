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
import {Appointmentviewpage} from '../pages/appointmentview/appointmentview';
import {Appointmentaddpage} from '../pages/appointmentadd/appointmentadd';

import {Newspage}from '../pages/news/news';
import {Doctorpage}from '../pages/doctor/doctor';
import {Settingpage}from '../pages/setting/setting';
import {Dairypage}from '../pages/dairy/dairy';
import { DataProvider } from '../providers/data/data';
//import {Addappoitment} from '../pages/appointment/addappoint/addappoint';







import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';


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
<<<<<<< HEAD
    Appointmentaddpage,

=======
    //Addappoitment
>>>>>>> 97ba2f39e96ec0880c86d69c3bade89acbe8b9ad

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
<<<<<<< HEAD
    IonicStorageModule.forRoot(),
    HttpModule,
=======

>>>>>>> 97ba2f39e96ec0880c86d69c3bade89acbe8b9ad
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
<<<<<<< HEAD
    Appointmentaddpage
=======
  //  Addappoitment
>>>>>>> 97ba2f39e96ec0880c86d69c3bade89acbe8b9ad
  ],
  providers: [
    StatusBar,
    SplashScreen,


    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
