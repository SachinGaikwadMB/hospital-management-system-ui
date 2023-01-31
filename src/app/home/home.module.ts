import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CommomComponentModule } from '../commom-component/commom-component.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', redirectTo:'home', pathMatch:'full'
  },
  {
    path:'home', component:HomePageComponent
  }
];

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    CommomComponentModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    HomePageComponent
  ]
})
export class HomeModule { }
