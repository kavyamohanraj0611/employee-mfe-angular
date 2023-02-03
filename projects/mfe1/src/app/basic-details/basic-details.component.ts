import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BasicDetailsService } from '../basic-details.service';
import { basicFormGroup } from '../basicdetails/basicFormGroup';
import { addBasicDetails, loadBasicDetails } from '../state/basic.action';


@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent {
  employeeForm:FormGroup|any

  constructor(private formBuilder:FormBuilder,private basicDetailService:BasicDetailsService, private store:Store,private router:Router) { 
    this.employeeForm = new FormGroup<basicFormGroup>({
      id:new FormControl<string>('',{ nonNullable: true ,validators:[Validators.required,Validators.pattern('^(ACE)[0-9]{4}$')]}),
      employeeName:new FormControl<string>('',{ nonNullable: true ,validators:[Validators.required,Validators.pattern('^[a-zA-Z ]{1,15}$')]}),
      employeeDepartment:new FormControl<string>('',{ nonNullable: true ,validators:[Validators.required]}),
      employeeEmail:new FormControl<string>('',{ nonNullable: true ,validators:[Validators.required,Validators.pattern('^[a-z0-9\.]{4,18}@[a-z]+\.[a-z\.]{2,6}$')]}),
      employeePhoneNumber:new FormControl<number>(0,{ nonNullable: true ,validators:[Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')]})
    });
  }
  ngOnInit(): void {}

  register(){
    // this.basicDetailService.addEmployeeBasic(this.employeeForm.value)
    //   .subscribe(data => {
    //     console.log("Data ",data)
    //     this.employeeForm.reset()
    //   }) 
      this.store.dispatch(addBasicDetails(this.employeeForm.value))
  }

}
