import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contatos = [
    { nome: 'André Felizardo', empresa: 'Google', telefone: '2199999999', rua: 'Rua dos Alfeneiros', uf: 'RJ'},
    { nome: 'Larissa Anitta', empresa: 'Microsoft', telefone: '21999984849', rua: 'Rua da Conciliação dos Evangélicos', uf: 'RJ'},
    { nome: 'Harry Potter', empresa: 'Apple', telefone: '11999964778399', rua: 'Rua dos Dementadores de Grindewald', uf: 'SP'}
  ];

  contatosDb;

  constructor(
    public navCtrl: NavController,
    public http: Http
    ) {

  }

  ionViewDidLoad() {
    this.pegarDadosFirebase();
  }

  pegarDadosFirebase() {
    this.http.get('https://crud-ionic-e6e42.firebaseio.com/contatos.json')
    .map(res => res.json())
    .subscribe(data => {
      console.log(data, 'dados do Firebase');
    })
  }

}
