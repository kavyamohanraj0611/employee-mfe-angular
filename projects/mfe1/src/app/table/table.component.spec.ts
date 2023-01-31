import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { basicDetailReducer } from '../state/basic.reducer';
import { MockStore, provideMockStore} from '@ngrx/store/testing';

import { TableComponent } from './table.component';
import { BasicDetailsService } from '../basic-details.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { employeeBasic } from '../employee-basic-model';
import { loadBasicDetails } from '../state/basic.action';
import { StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { routes } from '../basicdetails/basicdetails-routing.module';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let store:MockStore;
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
      imports:[HttpClientTestingModule,RouterTestingModule.withRoutes(routes),NgxPaginationModule,ReactiveFormsModule,StoreModule.forRoot({basic:basicDetailReducer})],
      providers:[provideMockStore({initialState})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
    router=TestBed.inject(Router);
    location=TestBed.inject(Location)    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should verify if button is clicked', () => {
  //   spyOn(component, 'addBasicDetail');
  //   let button = fixture.debugElement.nativeElement.querySelector('button');
  //   button.click();
  //   component.addBasicDetail();
  //   expect(component.addBasicDetail).toHaveBeenCalled();
  // });

  // it('should navigate to details form on button click',fakeAsync(()=>{
  //   component.addBasicDetail()
  //   tick();
  //   router.navigate(['/form1'])
  //   expect(location.path()).toEqual('/form1')
  // }))
});

