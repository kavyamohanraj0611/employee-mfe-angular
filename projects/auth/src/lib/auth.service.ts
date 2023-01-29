import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  canActivate(): boolean {
    const token = sessionStorage.getItem('token')
    console.log("Innnnn");
    
    if (!token || token==='') {
      this.router.navigate(['login']);
      console.log("Not allowed");
      alert("Please login to continue")
      return false;
    }
    return true;
  }
}
