import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from 'projects/mfe3/src/app/user.service';

import { NavbarComponent } from './navbar.component';
import { routes } from '../app-routing.module'
import { Location } from '@angular/common';
import { inject } from '@angular/core';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule.withRoutes(routes)],
      providers:[UserService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router)
    location = TestBed.inject(Location);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('component form should be invalid when empty',()=>{
    spyOn(component, 'logout');
    component.logout();
    expect(component.loggedIn).toBeFalsy();
  });

  // it('should navigate to login', () => {
  //   spyOn(component, 'logout');
  //   component.logout();
  //   router.navigate(['/login/user-login']);
  //   if(window.confirm())
  //     expect(location.path()).toBe('/login/user-login');
  // });
});
