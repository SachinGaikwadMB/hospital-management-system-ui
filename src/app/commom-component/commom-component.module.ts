import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryHeaderComponent } from './components/primary-header/primary-header.component';
import { SecondaryHeaderComponent } from './components/secondary-header/secondary-header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { AuthModule } from '../auth/auth.module';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path:'login', loadChildren:() => import('../auth/auth.module').then(m=>m.AuthModule)
  }
];
@NgModule({
  declarations: [
    PrimaryHeaderComponent,
    SecondaryHeaderComponent,
    NavbarComponent,
    FooterComponent,
    MainContentComponent,
    
  ],
  imports: [
    CommonModule,
    AuthModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    PrimaryHeaderComponent,
    SecondaryHeaderComponent,
    NavbarComponent,
    FooterComponent,
    MainContentComponent
    
  ]
})
export class CommomComponentModule { }
