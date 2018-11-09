import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(public formbuilder: FormBuilder) {
    this.contatoForm = this.formbuilder.group({
      nome: [null, [Validators.required, Validators.minLength(5)]],
      empresa: [null, [Validators.minLength(3)]],
      telefone: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(11)]],
      cep: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      rua: [null, [Validators.required]],
      bairro: [null, [Validators.required]],
      numero: [null],
      cidade: [null, [Validators.required]],
      uf: [null, [Validators.required]]
    })
  }

  cadastraContato() {
    console.log(this.contatoForm.value);
  }

}
