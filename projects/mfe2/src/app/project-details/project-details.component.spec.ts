import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BasicDetailsService } from 'projects/mfe1/src/app/basic-details.service';

import { ProjectDetailsComponent } from './project-details.component';

describe('ProjectDetailsComponent', () => {
  let component: ProjectDetailsComponent;
  let fixture: ComponentFixture<ProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailsComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[BasicDetailsService]
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

  it('should require valid id ', () => {
    component.employeeProjectForm.patchValue({
      "id": "1234",
      "employeeName":"abcdef",
      "projectName":"xyz",
      "projectDescription":"e-kart application",
      "managerName":"pqrs"
    });
    expect(component.employeeProjectForm.get('id')?.valid).toEqual(true);
    expect(component.employeeProjectForm.get('employeeName')?.valid).toEqual(true);
    expect(component.employeeProjectForm.get('projectName')?.valid).toEqual(true);
    expect(component.employeeProjectForm.get('projectDescription')?.valid).toEqual(true);
    expect(component.employeeProjectForm.get('managerName')?.valid).toEqual(true);

  });

});
