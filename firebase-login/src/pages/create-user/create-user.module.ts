import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateUserPage } from './create-user';

@NgModule({
  declarations: [
    CreateUserPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateUserPage),
  ],
})
export class CreateUserPageModule {}
