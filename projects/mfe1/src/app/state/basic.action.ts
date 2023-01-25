import { createAction, props } from '@ngrx/store';
import { employeeBasic } from '../employee-basic-model';


export const addBasicDetails = createAction(
  '[Basic Details Page] Add Basic Details',
  props<{ id:string,employeeName:string,employeeDepartment:string,employeeEmail:string,employeePhoneNumber:number}>()
);

export const loadBasicDetails = createAction(
  '[Basic Details Api] Load Basic Details');

export const loadBasicDetails_success = createAction(
  '[Basic Details Api] Load Basic Details success',
  props<{ basicDetails:employeeBasic[] }>()
);

export const loadBasicDetails_failure = createAction(
  '[Basic Details Api] Load Basic Details failure',
  props<{ error:string }>()
);