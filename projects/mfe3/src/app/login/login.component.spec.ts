import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../user.service';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../state/login.state';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router:Router;
  let location:Location;
  let service:UserService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule,ReactiveFormsModule],
      providers:[UserService,provideMockStore({initialState})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service=TestBed.inject(UserService)
    router=TestBed.inject(Router)
    location=TestBed.inject(Location)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the form invalid at initial state', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should require valid userName ', () => {
    component.loginForm.patchValue({
      "userEmail": "abcdef@gmail.com"
    });
    expect(component.loginForm.get('userEmail')?.valid).toEqual(true);
  });

  it('should require valid email', () => {
    component.loginForm.patchValue({
      "userEmail": "abc#$f"
    });
    expect(component.loginForm.get('userEmail')?.invalid).toEqual(true);
  });

  it('should require valid password ', () => {
    component.loginForm.patchValue({
      "password": "ghijk123344"
    });
    expect(component.loginForm.get('password')?.valid).toEqual(true);
  });

  it('should have the form empty after login button is clicked', fakeAsync(() => {
    spyOn(component,'login').and.callThrough()
    component.login()
    tick()
    expect(component.loginForm.valid).toBeFalsy();
  }));

  it('on logged in it should navigates to home',
  fakeAsync(()=>{
    spyOn(service,'isAuthenticated').and.returnValue(true)
    component.ngOnInit()
    tick();
    expect(location.path()).toEqual('/')
  }))

  it('should call loginUser method on login',
  fakeAsync(()=>{
    spyOn(component,'login').and.callThrough()
    tick();
    expect(service.loginUser).toHaveBeenCalled
  }))
});
