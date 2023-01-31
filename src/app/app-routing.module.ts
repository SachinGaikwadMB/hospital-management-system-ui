import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/components/home-page/home-page.component';

const routes: Routes = [
  {
    path:'', loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
  }
  , {
    path:'admin', loadChildren:()=>import('./admin/admin.module').then(m=>m.DoctorModule)
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
