import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProjectDetailsService } from '../project-details.service';
import { addprojectDetails } from '../state/project.action';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  employeeProjectForm:FormGroup|any

  constructor(private formBuilder:FormBuilder,private projectDetailService:ProjectDetailsService,private store:Store) { 
    this.employeeProjectForm = this.formBuilder.group({
      id:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{1,10}$')]),
      employeeName:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]{1,15}$')]),
      projectName:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]{1,}$')]),
      projectDescription:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9!@#$%^&*)(;:,._<>/? ]{5,200}$'),Validators.minLength(5),Validators.maxLength(200)]),
      managerName:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]{1,15}$')])
    });
  }
  ngOnInit(): void {
  }

  register(employeeProjectForm:FormGroup){
   console.log("Form ",employeeProjectForm.value);  
  //  this.projectDetailService.addEmployeeProject(employeeProjectForm.value)
  //     .subscribe(data => {
  //       console.log("Data ",data)
  //       employeeProjectForm.reset()
  //     })      
      this.store.dispatch(addprojectDetails(employeeProjectForm.value));
      
  }

  get id(){
    return this.employeeProjectForm.get('id')
  }
  get employeeName(){
    return this.employeeProjectForm.get('employeeName')
  }
  get projectName(){
    return this.employeeProjectForm.get('projectName')
  }
  get projectDescription(){
    return this.employeeProjectForm.get('projectDescription')
  }
  get managerName(){
     return this.employeeProjectForm.get('managerName')
  }
}
