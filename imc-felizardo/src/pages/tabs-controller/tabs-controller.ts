import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CLculoIMCPage } from '../c-lculo-imc/c-lculo-imc';
import { CartTabDefaultPagePage } from '../cart-tab-default-page/cart-tab-default-page';
import { CloudTabDefaultPagePage } from '../cloud-tab-default-page/cloud-tab-default-page';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CLculoIMCPage;
  tab2Root: any = CartTabDefaultPagePage;
  tab3Root: any = CloudTabDefaultPagePage;
  constructor(public navCtrl: NavController) {
  }
  
}
