import { createAction, props } from '@ngrx/store';
import { employeeProject } from '../employee-project-model';


export const addprojectDetails = createAction(
  '[Project Details Page] Add Project Details',
  props<{ id:string,employeeName:string,projectName:string,projectDescription:string,managerName:string}>()
);

export const loadProjectDetails = createAction(
  '[Project Details Api] Load project Details');

export const loadProjectDetails_success = createAction(
  '[Project Details Api] Load Project Details success',
  props<{ projectDetails:employeeProject[] }>()
);

export const loadProjectDetails_failure = createAction(
  '[Project Details Api] Load Project Details failure',
  props<{ error:string }>()
);