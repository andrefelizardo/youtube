import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cart-tab-default-page',
  templateUrl: 'cart-tab-default-page.html'
})
export class CartTabDefaultPagePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
