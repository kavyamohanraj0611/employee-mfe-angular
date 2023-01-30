import { Location } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'projects/mfe3/src/app/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  loggedIn!: boolean;
  userName!: string | any;

  constructor (private userService:UserService,private router:Router,private location:Location){}
  ngOnInit(){
    if(this.userService.isAuthenticated()){
      this.loggedIn=true
      this.userName=sessionStorage.getItem('username')
      console.log("Eeee ",this.userName);
    }
    else{
      this.loggedIn=false
    }
    console.log("LoggedIn ",this.loggedIn);
  }

  logout(){
    if(window.confirm("Are you sure to logout")){
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
    this.router.navigate(['/login']).then(()=>window.location.reload())
    console.log("Location ",this.location.path());

    this.loggedIn=false
    }
  }

}
