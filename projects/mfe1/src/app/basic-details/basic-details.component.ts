import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent {
  employeeForm:FormGroup|any

  constructor(private formBuilder:FormBuilder) { 
    this.employeeForm = this.formBuilder.group({
      employeeId:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{1,10}$')]),
      employeeName:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]{1,15}$')]),
      employeeDepartment:new FormControl('',[Validators.required]),
      employeeEmail:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9\.]{4,18}@[a-z]+\.[a-z\.]{2,6}$')]),
      employeePhoneNumber:new FormControl('',[Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')])
    });
  }
  ngOnInit(): void {
  }

  register(employeeForm:FormGroup){
   console.log("Form ",employeeForm.value);     
  }

  get employeeId(){
    return this.employeeForm.get('employeeId')
  }
  get employeeName(){
    return this.employeeForm.get('employeeName')
  }
  get employeeDepartment(){
    return this.employeeForm.get('employeeDepartment')
  }
  get employeeEmail(){
    return this.employeeForm.get('employeeEmail')
  }
  get employeePhoneNumber(){
     return this.employeeForm.get('employeePhoneNumber')
  }

}
