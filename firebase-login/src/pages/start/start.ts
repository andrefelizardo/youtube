import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from '@angular/fire/database';

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'start-page'
})
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  uid: string;
  task;
  list;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public db: AngularFireDatabase
    ) {
  }

  ionViewDidLoad() {
    this.storage.get('user')
    .then((resolve) => {
      this.uid = resolve;
      this.getList();
    })
  }

  addTask(task: string) {
    this.db.database.ref('/tasks').child(this.uid).push({
      task: task
    })
    .then(() => {
      this.task = "";
    })
  }

  getList() {
    let listDB = this.db.database.ref('/tasks').child(this.uid);
    listDB.on('value', (snapshot) => {
      const items = snapshot.val();
      if(items) {
        this.list = Object.keys(items).map(i => items[i]);
      }
    })
  }

}
