import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cloud-tab-default-page',
  templateUrl: 'cloud-tab-default-page.html'
})
export class CloudTabDefaultPagePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
