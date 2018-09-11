import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateConfirmPassword } from '../../validators/confirmPassword';

import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from 'ionic-angular';

@IonicPage({
  name: 'create-user'
})
@Component({
  selector: 'page-create-user',
  templateUrl: 'create-user.html',
})
export class CreateUserPage {

  registerForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController
  ) {
    this.registerForm = this.formbuilder.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(6), ValidateConfirmPassword]]
    })
  }

  submitForm () {
    this.afAuth.auth.createUserWithEmailAndPassword(
      this.registerForm.value.email, this.registerForm.value.password)
      .then((response) => {
        this.presentAlert('Usuário cadastrado', 'Usuário cadastrado com sucesso.');
        this.navCtrl.setRoot('start-page');
      })
      .catch((error) => {
        if(error.code == 'auth/email-already-in-use') {
          this.presentAlert('Erro', 'E-mail já cadastrado');
        }
      })
  }

  presentAlert(title: string, subtitle: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }
}
