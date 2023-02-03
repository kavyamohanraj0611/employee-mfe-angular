import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { loadBasicDetails } from 'projects/mfe1/src/app/state/basic.action';
import { employeeProject } from '../employee-project-model';
import { ProjectDetailState } from '../state/project.reducer';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let initialState:employeeProject
  let store:Store<ProjectDetailState>;

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
    store = TestBed.inject(Store);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('add method should dispatch add action', fakeAsync(() => {
  //   spyOn(component,'ngOnInit').and.callThrough()
  //   tick();
  //   expect(store.dispatch).toHaveBeenCalledWith(loadBasicDetails());
  // }));

});
