import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../user.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule],
      providers:[UserService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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

});
