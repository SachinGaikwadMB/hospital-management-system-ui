import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CommomComponentModule } from '../commom-component/commom-component.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    CommomComponentModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class HomeModule { }
