import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/components/home/home.component';
import { PatientComponent } from './dashboard/components/patient/patient.component';
import { DoctorComponent } from './dashboard/components/doctor/doctor.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [

      {
        path: '',
        redirectTo:'home',
        pathMatch:'full'
        
      },
      {
        path: 'home',
        component: HomeComponent,
        outlet:'admin-dash'
      },

      {
        path:'patient',
        component:PatientComponent,
        outlet:'admin-dash'
      },

      {
        path:'doctor',
        component:DoctorComponent,
        outlet:'admin-dash'
      },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    PatientComponent,
    DoctorComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DoctorModule {}
