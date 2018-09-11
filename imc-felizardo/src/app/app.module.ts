import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CLculoIMCPage } from '../pages/c-lculo-imc/c-lculo-imc';
import { CartTabDefaultPagePage } from '../pages/cart-tab-default-page/cart-tab-default-page';
import { CloudTabDefaultPagePage } from '../pages/cloud-tab-default-page/cloud-tab-default-page';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CLculoIMCPage,
    CartTabDefaultPagePage,
    CloudTabDefaultPagePage,
    TabsControllerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CLculoIMCPage,
    CartTabDefaultPagePage,
    CloudTabDefaultPagePage,
    TabsControllerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}