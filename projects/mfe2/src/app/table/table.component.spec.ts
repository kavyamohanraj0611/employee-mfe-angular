import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { employeeProject } from '../employee-project-model';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let initialState:employeeProject

  beforeEach(async () => {
    initialState={
      id:'ACE1111',
      employeeName:'abcd',
      projectName:'Example',
      projectDescription:'Example project',
      managerName:'xyz'
    }

    await TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule,NgxPaginationModule],
      providers:[provideMockStore({initialState})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
