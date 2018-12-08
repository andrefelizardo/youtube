import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFireDatabase } from '@angular/fire/database';

/**
 * Generated class for the ContatoFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'contato-form',
  templateUrl: 'contato-form.html'
})
export class ContatoFormComponent {

  contatoForm: FormGroup;

  constructor(
    public formbuilder: FormBuilder,
    public http: Http,
    public db: AngularFireDatabase
    ) {
    this.contatoForm = this.formbuilder.group({
      nome: [null, [Validators.required, Validators.minLength(5)]],
      empresa: [null, [Validators.minLength(3)]],
      telefone: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(11)]],
      cep: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      rua: [null, [Validators.required]],
      bairro: [null, [Validators.required]],
      numero: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      uf: [null, [Validators.required]]
    })
  }

  buscaCep() {
    const cepValue = this.contatoForm.controls['cep'].value;
    const isValid = this.contatoForm.controls['cep'].valid;
    if(isValid) {
      this.http.get(`https://viacep.com.br/ws/${cepValue}/json/`)
      .map(res => res.json())
      .subscribe(data => {
        this.insereValoresEndereco(data);
      })
    }
  }

  insereValoresEndereco(dados) {
    this.contatoForm.controls['rua'].setValue(dados.logradouro);
    this.contatoForm.controls['bairro'].setValue(dados.bairro);
    this.contatoForm.controls['cidade'].setValue(dados.localidade);
    this.contatoForm.controls['uf'].setValue(dados.uf);
  }

  cadastraContato() {
    this.db.database.ref('/contatos').push(this.contatoForm.value)
    .then(() => {
      console.log('salvou');
      this.contatoForm.reset();
    })
  }

}
