import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { employeeBasic } from './employee-basic-model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BasicDetailsService {

  baseURL: string = "http://localhost:3000/";
  constructor(private http:HttpClient) { }

  addEmployeeBasic(employee:employeeBasic): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(employee);
    console.log("Body",body)
    return this.http.post(this.baseURL + 'employee', body,{'headers':headers})
  }

  getEmployeeBasic(): Observable<employeeBasic[]> {
    console.log('getEmployee '+this.baseURL + 'employee')
    return this.http.get<employeeBasic[]>(this.baseURL + 'employee')
  }
}
