import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http : HttpClient) { }

  getAllPatient() {
    return this.http.get(environment.baseUrl + '/patients');
  }

  registerPatient(patientModel : any) {
    return this.http.post(environment.baseUrl + '/patients', patientModel);
  }

  searchPatinet(queryParams) {
    return this.http.get(environment.baseUrl + '/patients/search', {params:queryParams});
  }
}
