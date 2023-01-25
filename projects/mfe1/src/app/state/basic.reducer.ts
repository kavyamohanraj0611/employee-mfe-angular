import { createReducer } from "@ngrx/store";
import { on } from "@ngrx/store";

import { addBasicDetails, loadBasicDetails, loadBasicDetails_success } from "./basic.action";
import { employeeBasic } from "../employee-basic-model";

export interface BasicDetailState {
    basicDetails:employeeBasic[];
    error:string;
    status:'pending' | 'loading' | 'error' | 'success';
}

export const initialState: BasicDetailState = {
    basicDetails:[],
    error:'',
    status:'pending'
 }

export const basicDetailReducer = createReducer(
    initialState,
    on(addBasicDetails, (state, {id,employeeName,employeeDepartment,employeeEmail,employeePhoneNumber}) => {
        console.log("reducer state",state)
        console.log("reducer action")
        return {
            ...state,
            basicDetails:[{id,employeeName,employeeDepartment,employeeEmail,employeePhoneNumber}]
        }
    }),
    on(loadBasicDetails,(state)=>{
        console.log("Load ",state);

        return {
            ...state,
            status:'loading'
        }
    }),
    on(loadBasicDetails_success,(state,{basicDetails})=>{
        console.log("Success ",basicDetails);
        
        return {
            ...state,
            basicDetails:basicDetails,
            error:'',
            status:'success'
        }
    }),
    on(loadBasicDetails,(state)=>{
        return {
            ...state,
            error:'Error',
            status:'error'
        }
    })
);