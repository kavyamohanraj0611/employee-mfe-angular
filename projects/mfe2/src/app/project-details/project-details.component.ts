import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  employeeProjectForm:FormGroup|any

  constructor(private formBuilder:FormBuilder) { 
    this.employeeProjectForm = this.formBuilder.group({
      employeeId:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{1,10}$')]),
      employeeName:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]{1,15}$')]),
      projectName:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]{1,15}$')]),
      projectDescription:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z].!@#$%^&*()_-+$'),Validators.minLength(5),Validators.maxLength(200)]),
      managerName:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]{1,15}$')])
    });
  }
  ngOnInit(): void {
  }

  register(employeeProjectForm:FormGroup){
   console.log("Form ",employeeProjectForm.value);     
  }

  get employeeId(){
    return this.employeeProjectForm.get('employeeId')
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
