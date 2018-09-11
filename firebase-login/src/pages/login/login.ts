import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from 'ionic-angular';

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController
    ) {
    this.loginForm = this.formbuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  submitLogin() {
    this.afAuth.auth.signInWithEmailAndPassword(
      this.loginForm.value.email, this.loginForm.value.password)
      .then(() => {
        this.presentAlert('Usuário autenticado', '');
        this.navCtrl.setRoot('start-page');
      })
      .catch((error) => {
        if(error.code == 'auth/wrong-password') {
          this.presentAlert('Erro', 'Senha incorreta, digite novamente.');
          this.loginForm.controls['password'].setValue(null);
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
