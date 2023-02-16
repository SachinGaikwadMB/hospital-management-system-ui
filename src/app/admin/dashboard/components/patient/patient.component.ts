import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  patientsData : any = [];
  addPatientForm : FormGroup;
  searchForm : FormGroup;
  isDataNotFound : boolean = false;
  setDoctorId : any;

  constructor(
    private patientService : PatientService,
    private fb : FormBuilder
    ) { }

  ngOnInit(): void {
   this.getAllPatients();
    
   this.addPatientForm = this.fb.group({
      'firstName' : [''],
      'lastName' : [''],
      'mobileNumber':[''],
      'email' : [''],
      'date' : [''],
      'refferedDoctor' : ['']
    });

    this.searchForm = this.fb.group({
      'search':['']
    });

  }

  getAllPatients() {
    this.patientService.getAllPatient().subscribe((res) => {
      this.patientsData = res;
      console.log(this.patientsData);
      
    });

  }

  registerPatient() {
    console.log(this.addPatientForm.value);
    console.log();

    this.doctorIdInIt();
    
    const addPatientModel = {
      'firstName' : this.addPatientForm.value.firstName,
      'lastName' : this.addPatientForm.value.lastName,
      'mobileNumber':this.addPatientForm.value.mobileNumber,
      'email' :this.addPatientForm.value.email,
      'date' :this.addPatientForm.value.date,
      'doctorId' : this.setDoctorId,
      'adminId':1
    }
    
    this.patientService.registerPatient(addPatientModel).subscribe((resp : any) => {
      console.log(resp);
    });

  }
  doctorIdInIt() {
    console.log(this.addPatientForm.value.refferedDoctor.toUpperCase());
    
    if(this.addPatientForm.value.refferedDoctor.toUpperCase() === 'DR. AJAY JADHAV') {
      this.setDoctorId = 1;
    } else  if(this.addPatientForm.value.refferedDoctor.toUpperCase() === 'DR. RAHUL POPULAWAR') {
      this.setDoctorId = 2;
    } else  if(this.addPatientForm.value.refferedDoctor.toUpperCase() === 'DR. SARTHAK MASKE') {
      this.setDoctorId = 3;
    } else if(this.addPatientForm.value.refferedDoctor.toUpperCase() === 'DR. RUSHI GIRI') {
      this.setDoctorId = 4;
    }
  }
  
  search() {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("searchText", this.searchForm.value.search);

      this.patientService.searchPatinet(queryParams).subscribe((res)=> {
       this.patientsData = res;
       if(this.patientsData.length === 0) {
        this.isDataNotFound = true;
       }else {
        this.isDataNotFound = false;
       }
        
      });
        
    
  }
}
