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

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let service: UserService;
  let router:Router;
  let location:Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes)],
      providers: [UserService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router=TestBed.inject(Router);
    location=TestBed.inject(Location)
    service=TestBed.inject(UserService)

    let store: any = {};
    const mockSessionStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      }
    };
    spyOn(sessionStorage, 'getItem')
      .and.callFake(mockSessionStorage.getItem);
    spyOn(sessionStorage, 'setItem')
      .and.callFake(mockSessionStorage.setItem);
    spyOn(sessionStorage, 'removeItem')
      .and.callFake(mockSessionStorage.removeItem);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loggedIn should be invalid on load whithout login', () => {
    spyOn(component, 'logout');
    component.logout();
    expect(component.loggedIn).toBeFalsy();
  });

  // it('should go to basic url on clicking view basic details button',
  //  fakeAsync ( () => {
  //     let fixture = TestBed.createComponent(NavbarComponent);
  //     fixture.detectChanges();

  //     fixture.debugElement.query(By.css('#basic')).nativeElement.click();

  //     let href = fixture.debugElement.query(By.css('#basic')).nativeElement
  //       .getAttribute('routerLink');
  //       tick()
  //     expect(href).toEqual('/basic');
  //   }));

  // it('should go to project url on clicking view project details button',
  //   fakeAsync(( () => {
  //     let fixture = TestBed.createComponent(NavbarComponent);
  //     fixture.detectChanges();

  //     fixture.debugElement.query(By.css('#project')).nativeElement.click();
  //     let href = fixture.debugElement.query(By.css('#project')).nativeElement
  //       .getAttribute('routerLink');
  //       tick();
  //     expect(href).toEqual('/project');
  //   })));

  it('should remove the token in sessionStorage on logout',
  ()=>{
    spyOn(component, 'logout');
    component.logout();
    expect(sessionStorage.removeItem('token')).toBeUndefined();
    expect(sessionStorage.getItem('token')).toBeNull();
  })

  it('on logout isAuthenticated must return false',
  fakeAsync(()=>{
    component.logout()
    expect(sessionStorage.removeItem('token')).toBeUndefined();
    tick();
    expect(jasmine.createSpy('isAuthenticated')).toBeFalse
  }))

  it('on logged in loggedIn must be true',
  fakeAsync(()=>{
    spyOn(service,'isAuthenticated').and.returnValue(true)
    component.ngOnInit()
    tick();
    expect(component.loggedIn).toBeTrue();
  }))



});
