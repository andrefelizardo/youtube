import { NgModule } from '@angular/core';
import { ContatoFormComponent } from './contato-form/contato-form';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../app/app.component';
@NgModule({
	declarations: [ContatoFormComponent],
	imports: [
		IonicModule.forRoot(MyApp),
	],
	exports: [ContatoFormComponent]
})
export class ComponentsModule {}
