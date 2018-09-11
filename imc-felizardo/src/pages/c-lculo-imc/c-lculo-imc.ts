import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-c-lculo-imc',
  templateUrl: 'c-lculo-imc.html'
})
export class CLculoIMCPage {

  resultadoIMC;

  constructor(public navCtrl: NavController) {
  }

  calculaIMC(peso, altura) {
    const alturaM = altura / 100
    this.resultadoIMC = peso / (alturaM * alturaM)
  }
  
}
