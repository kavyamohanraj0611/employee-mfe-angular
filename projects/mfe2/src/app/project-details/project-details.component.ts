import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProjectDetailsService } from '../project-details.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  employeeProjectForm:FormGroup|any

  constructor(private formBuilder:FormBuilder,private projectDetailService:ProjectDetailsService,private toastr:ToastrService) { 
    this.employeeProjectForm = this.formBuilder.group({
      id:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{1,10}$')]),
      employeeName:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]{1,15}$')]),
      projectName:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]{1,15}$')]),
      projectDescription:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]{5,200}$')]),
      managerName:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]{1,15}$')])
    });
  }
  ngOnInit(): void {
  }

  register(employeeProjectForm:FormGroup){
   console.log("Form ",employeeProjectForm.value);  
   this.projectDetailService.addEmployeeProject(employeeProjectForm.value)
      .subscribe(data => {
        console.log("Data ",data)
        this.toastr.success('Success', 'Employee Project details has been saved');
        employeeProjectForm.reset()
      })     
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
