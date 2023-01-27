import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup;

  constructor(private form:FormBuilder,private userService:UserService,private router:Router){
    this.loginForm=this.form.group({
      userEmail:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9\.]{4,18}@[a-z]+\.[a-z\.]{2,6}$')]),
      password:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9!@#$%^&*+]{8,}$'),Validators.minLength(8)])
    })
  }

  login(){
    console.log("Form value ",this.loginForm.value)
    // this.userService.loginUser(this.loginForm.value).subscribe(data => {
        // console.log("Data ",data)
        this.loginForm.reset()
        this.router.navigate(['home'])
      // }) 
  }
  


}
