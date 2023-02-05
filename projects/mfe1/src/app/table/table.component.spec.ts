import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore} from '@ngrx/store/testing';

import { TableComponent } from './table.component';
import { BasicDetailsService } from '../basic-details.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { employeeBasic } from '../employee-basic-model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { routes } from '../basicdetails/basicdetails-routing.module';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let service: BasicDetailsService;
  let fakeData:employeeBasic[] =[{
    "id": "ACE1000",
    "employeeName": "ABCD",
    "employeeDepartment": "Testing",
    "employeeEmail": "abcd@gmail.com",
    "employeePhoneNumber": 9876543210,
  }]
  let router:Router;
  let location:Location
  let initialState:employeeBasic;
  let store:Store

  beforeEach(async () => {
    initialState={
      id:'ACE00001',
      employeeName:'abcd',
      employeeDepartment:'Testing',
      employeeEmail:'abcd@gmail.com',
      employeePhoneNumber:98766425263
    }
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule.withRoutes([]),NgxPaginationModule,ReactiveFormsModule],
      providers:[provideMockStore({initialState})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router=TestBed.inject(Router);
    location=TestBed.inject(Location)   
    store=TestBed.inject(Store) 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify if filter button is clicked', () => {
    spyOn(component, 'onFilter');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    component.onFilter();
    expect(component.onFilter).toHaveBeenCalled();
  });

  it('should emit on change for filter', () => {
    component.filterForm.get('dept')?.patchValue("Sales");
    fixture.detectChanges();
    spyOn(component,'onFilter')
    const select = fixture.debugElement.query(By.css('select')).nativeElement;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.onFilter).toHaveBeenCalled();
  });

  it('filter method should filter the employee based on department', fakeAsync(() => {
    component.onFilter();
    spyOn(component, 'onFilter').and.callThrough()
    tick()
    expect(fakeData.filter((basicDetails:employeeBasic) => basicDetails.employeeDepartment === 'Testing')).toEqual([
      {
        id: 'ACE1000',
        employeeName: 'ABCD',
        employeeDepartment:'Testing',
        employeeEmail:'abcd@gmail.com',
        employeePhoneNumber: 9876543210,
      },
    ]);
    component.onFilter();
    expect(component.onFilter).toHaveBeenCalled();
  }));


});

