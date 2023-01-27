import { createReducer } from "@ngrx/store";
import { on } from "@ngrx/store";

import { addBasicDetails, loadBasicDetails, loadBasicDetails_failure, loadBasicDetails_success } from "./basic.action";
import { employeeBasic } from "../employee-basic-model";

export interface BasicDetailState {
    id:string;
    employeeName:string;
    employeeDepartment:string;
    employeeEmail:string;
    employeePhoneNumber:number;
}

export const initialState: BasicDetailState = {
    id:'',
    employeeName:'',
    employeeDepartment:'',
    employeeEmail:'',
    employeePhoneNumber:0
 }

export const basicDetailReducer = createReducer(
    initialState,
    on(addBasicDetails, (state, {id,employeeName,employeeDepartment,employeeEmail,employeePhoneNumber}) => {
        console.log("reducer state",state)
        console.log("reducer action")
        return {    
            id:id,
            employeeName:employeeName,
            employeeDepartment:employeeDepartment,
            employeeEmail:employeeEmail,
            employeePhoneNumber:employeePhoneNumber
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
            basicDetails
        }
    }),
    on(loadBasicDetails_failure,(state)=>{
        return {
            ...state,
        }
    })
);