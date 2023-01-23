import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BasicDetailsService } from '../basic-details.service';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent {
  employeeForm:FormGroup|any

  constructor(private formBuilder:FormBuilder,private basicDetailService:BasicDetailsService,private toastr:ToastrService) { 
    this.employeeForm = this.formBuilder.group({
      id:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{1,10}$')]),
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
    this.basicDetailService.addEmployeeBasic(employeeForm.value)
      .subscribe(data => {
        console.log("Data ",data)
        this.toastr.success('Success', 'Employee basic details has been saved');
        employeeForm.reset()
      })      
  }

  get id(){
    return this.employeeForm.get('id')
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
