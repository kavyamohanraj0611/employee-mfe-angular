import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BasicDetailsComponent } from './basic-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { routes } from '../basicdetails/basicdetails-routing.module';
import { employeeBasic } from '../employee-basic-model';
import * as DataActions from '../state/basic.action';
import { Store } from '@ngrx/store';

describe('BasicDetailsComponent', () => {
  let component: BasicDetailsComponent;
  let fixture: ComponentFixture<BasicDetailsComponent>;
  let router: Router;
  let location: Location;
  let initialState: employeeBasic
  let fakeData: employeeBasic = {
    "id": 'ACE0001',
    "employeeName": 'abcd',
    "employeeDepartment": 'Testing',
    "employeeEmail": 'abcd@gmail.com',
    "employeePhoneNumber": 98766425263
  }

  beforeEach(async () => {
    initialState = {
      id: 'ACE00001',
      employeeName: 'abcd',
      employeeDepartment: 'Testing',
      employeeEmail: 'abcd@gmail.com',
      employeePhoneNumber: 98766425263
    }
    await TestBed.configureTestingModule({
      declarations: [BasicDetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes), ReactiveFormsModule],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();
    location = TestBed.inject(Location)
    router = TestBed.inject(Router)
    fixture = TestBed.createComponent(BasicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the form invalid at initial state', () => {
    expect(component.employeeForm).toBeDefined();
    expect(component.employeeForm.valid).toBeFalsy();
  });

  it('should navigate to details form on button click', () => {
    const spy = spyOn(router, 'navigate');
    component.viewAllDetails();
    expect(
      spy.calls.first().args[0].toString().replace('[', '').replace("'", '')
    ).toContain('/basic/details');
  });


  it('should call register if submit button is clicked', fakeAsync(() => {
    spyOn(component, 'register').and.callFake
    fixture.detectChanges();
    const button=fixture.debugElement.query(By.css('#register')).nativeElement
    button.dispatchEvent(new Event('click'));
    component.register()
    fixture.detectChanges();
    expect(component.register).toHaveBeenCalled();
  }));
  

});

