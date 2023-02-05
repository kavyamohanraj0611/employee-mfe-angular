import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from 'projects/mfe3/src/app/user.service';

import { NavbarComponent } from './navbar.component';
import { routes } from '../app-routing.module'
import { Location } from '@angular/common';
import { inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable, Observer } from 'rxjs';
import { AppModule } from '../app.module';

const WINDOW_TOKEN=''
describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let service: UserService;
  let router:Router;
  let location:Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: []
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
    service=TestBed.inject(UserService)
    router=TestBed.inject(Router);
    location=TestBed.inject(Location)
    
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loggedIn should be invalid on load whithout login', () => {
    spyOn(component, 'logout');
    component.logout();
    expect(component.loggedIn).toBeFalsy();
  });


  it('should go to basic url on clicking view basic details button', () => {
    const spy = spyOn(router, 'navigate');
    component.viewBasicDetails();
    expect(
      spy.calls.first().args[0].toString().replace('[', '').replace("'", '')
    ).toContain('/basic');
  });

  it('should go to project url on clicking view project details button', () => {
    const spy = spyOn(router, 'navigate');
    component.viewProjectDetails();
    expect(
      spy.calls.first().args[0].toString().replace('[', '').replace("'", '')
    ).toContain('/project');
  });

  it('should remove the token in sessionStorage on logout',
  ()=>{
    spyOn(component, 'logout'); 
    component.logout();
    expect(sessionStorage.removeItem('token')).toBeUndefined();
    expect(sessionStorage.getItem('token')).toBeNull();
  })

  it('on logout isAuthenticated must return false',
  fakeAsync(()=>{
    const spy = spyOn(router, 'navigate');
    component.logout()
    expect(sessionStorage.removeItem('token')).toBeUndefined();
    tick();
    expect(spyOn(service,'isAuthenticated')).toBeFalse
    expect(spy.calls.first().args[0].toString().replace('[', '').replace("'", '')).toContain('/login');
  }))

  it('on logged in loggedIn must be true',
  fakeAsync(()=>{
    spyOn(service,'isAuthenticated').and.returnValue(true)
    component.ngOnInit()
    tick();
    expect(component.loggedIn).toBeTrue(); 
  })) 



});
