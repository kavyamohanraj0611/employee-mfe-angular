import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employeeProject } from './employee-project-model';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  baseURL: string = "http://localhost:3000/";
  constructor(private http:HttpClient) { }

  addEmployeeProject(employee:employeeProject): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(employee);
    console.log("Body",body)
    return this.http.post(this.baseURL + 'project', body,{'headers':headers})
  }

  getEmployeeProject(): Observable<employeeProject[]> {
    console.log('getEmployeeProject '+this.baseURL + 'project')
    return this.http.get<employeeProject[]>(this.baseURL + 'project')
  }
}
