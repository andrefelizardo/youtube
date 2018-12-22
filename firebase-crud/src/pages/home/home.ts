import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contatosDb;

  constructor(
    public navCtrl: NavController,
    public http: Http
    ) {
      this.contatosDb = [];
  }

  ionViewDidLoad() {
    this.pegarDadosFirebase();
  }

  pegarDadosFirebase() {
    this.http.get('https://crud-ionic-e6e42.firebaseio.com/contatos.json')
    .map(res => res.json())
    .subscribe(data => {
      this.trataDados(data);
    })
  }

  trataDados(dados) {
    this.contatosDb = Object.keys(dados).map(i => dados[i]);
  }

}
