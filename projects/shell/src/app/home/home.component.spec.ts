import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import {  Router } from '@angular/router';

import { HomeComponent } from './home.component';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let location: Location
  let router:Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule.withRoutes(routes)]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    location=TestBed.inject(Location)
    router=TestBed.inject(Router)
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navigate to "" redirects you to /home', fakeAsync(() => { 
    router.navigate(['']); 
    tick(); 
    expect(location.path()).toBe('/home');
  }));

  // it('should go to basic url  on clicking basic details button',
  //   fakeAsync(() => {
  //     let fixture = TestBed.createComponent(HomeComponent);
  //     fixture.detectChanges();

  //     fixture.debugElement.query(By.css('#basic')).nativeElement.click();
  //     let href = fixture.debugElement.query(By.css('#basic')).nativeElement
  //       .getAttribute('routerLink');
  //     expect(href).toEqual('/basic');
  //   }));

  // it('should go to project url on clicking project details button',
  //   fakeAsync(() => {
  //     let fixture = TestBed.createComponent(HomeComponent);
  //     fixture.detectChanges();

  //     fixture.debugElement.query(By.css('#project')).nativeElement.click();

  //     let href = fixture.debugElement.query(By.css('#project')).nativeElement
  //       .getAttribute('routerLink');
  //     expect(href).toEqual('/project');
  //   }));
});
