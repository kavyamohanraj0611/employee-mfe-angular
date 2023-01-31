import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { BasicDetailsService } from 'projects/mfe1/src/app/basic-details.service';
import { employeeProject } from '../employee-project-model';

import { ProjectDetailsComponent } from './project-details.component';

describe('ProjectDetailsComponent', () => {
  let component: ProjectDetailsComponent;
  let fixture: ComponentFixture<ProjectDetailsComponent>;
  let initialState:employeeProject;

  beforeEach(async () => {
    initialState={
      id:'ACE1111',
      employeeName:'abcd',
      projectName:'Example',
      projectDescription:'Example project',
      managerName:'xyz'
    }

    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailsComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule,ReactiveFormsModule],
      providers:[BasicDetailsService,provideMockStore({initialState})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the form invalid at initial state', () => {
    expect(component.employeeProjectForm).toBeDefined();
    expect(component.employeeProjectForm.valid).toBeFalsy();
  });

  it('should verify if button is clicked', () => {
    spyOn(component, 'viewProjectDetails');
    fixture.debugElement.query(By.css('#project')).nativeElement.click();
    expect(component.viewProjectDetails).toHaveBeenCalled();
  });

});
