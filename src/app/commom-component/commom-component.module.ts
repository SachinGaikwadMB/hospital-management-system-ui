import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryHeaderComponent } from './components/primary-header/primary-header.component';
import { SecondaryHeaderComponent } from './components/secondary-header/secondary-header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { AuthModule } from '../auth/auth.module';



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
    AuthModule
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
