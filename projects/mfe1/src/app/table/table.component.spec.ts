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
  let fakeData:employeeBasic ={
    "id": "ACE9876",
    "employeeName": "abc",
    "employeeDepartment": "def",
    "employeeEmail": "abcd@gmail.com",
    "employeePhoneNumber": 9876543210,
  }
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
      imports:[HttpClientTestingModule,RouterTestingModule.withRoutes(routes),NgxPaginationModule,ReactiveFormsModule],
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
    spyOn(component, 'filter');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    component.filter();
    expect(component.filter).toHaveBeenCalled();
  });

  it('should emit on change for filter', () => {
    component.filterForm.get('dept')?.patchValue("Sales");
    fixture.detectChanges();
    spyOn(component,'filter')
    const select = fixture.debugElement.query(By.css('select')).nativeElement;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.filter).toHaveBeenCalled();
  });

  it('should verify if filter button is clicked', fakeAsync(() => {
    const filter=spyOn(component, 'filter').and.stub()
    component.filter();
    expect(filter).toHaveBeenCalled()
    tick()
    fixture.whenStable().then(()=>{
      expect(component.page).toBe(1)
    })
  }));

  it('should call filter method on changing the select input',fakeAsync(()=>{
        spyOn(component,'filter').and.callThrough()
        component.filter()
        expect(spyOn(component,'filter')).toHaveBeenCalled()
    // expect(component.page).toBe(1)
  }))

});

