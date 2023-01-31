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
    }
    else{
      this.loggedIn=false
    }
  }

  logout(){
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
    this.router.navigate(['/login']).then(()=>window.location.reload())
    this.loggedIn=false
  }

}
