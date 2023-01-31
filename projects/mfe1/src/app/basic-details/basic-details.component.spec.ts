import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import {MockStore, provideMockStore } from '@ngrx/store/testing';
import { BasicDetailsComponent } from './basic-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { routes } from '../basicdetails/basicdetails-routing.module';
import { employeeBasic } from '../employee-basic-model';

describe('BasicDetailsComponent', () => {
  let component: BasicDetailsComponent;
  let fixture: ComponentFixture<BasicDetailsComponent>;
  let router: Router;
  let location: Location;
  let initialState:employeeBasic
  

  beforeEach(async () => {
    initialState={
      id:'ACE00001',
      employeeName:'abcd',
      employeeDepartment:'Testing',
      employeeEmail:'abcd@gmail.com',
      employeePhoneNumber:98766425263
    }
    await TestBed.configureTestingModule({
      declarations: [ BasicDetailsComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule.withRoutes(routes),ReactiveFormsModule],
      providers:[provideMockStore({initialState})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    location=TestBed.inject(Location)
    router=TestBed.inject(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify if button is clicked', () => {
    spyOn(component, 'viewAllDetails');
    fixture.debugElement.query(By.css('#details')).nativeElement.click();
    expect(component.viewAllDetails).toHaveBeenCalled();
  });


});

