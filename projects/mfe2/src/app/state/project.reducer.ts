import { createReducer } from "@ngrx/store";
import { on } from "@ngrx/store";

import { loadProjectDetails, loadProjectDetails_success, loadProjectDetails_failure, addprojectDetails } from "./project.action";

export interface ProjectDetailState {
    id:string;
    employeeName:string;
    projectName:string;
    projectDescription:string;
    managerName:string;
}

export const initialState: ProjectDetailState = {
    id:'',
    employeeName:'',
    projectName:'',
    projectDescription:'',
    managerName:''
 }

export const projectDetailReducer = createReducer(
    initialState,
    on(addprojectDetails, (state, {id,employeeName,projectName,projectDescription,managerName}) => {
        console.log("reducer state",state)
        console.log("reducer action")
        return {    
            id:id,
            employeeName:employeeName,
            projectName:projectName,
            projectDescription:projectDescription,
            managerName:managerName
        }
    }),
    on(loadProjectDetails,(state)=>{
        console.log("Load ",state);
        return {
            ...state,
            status:'loading'
        }
    }),
    on(loadProjectDetails_success,(state,{projectDetails})=>{
        console.log("Success ",projectDetails);
        return {
            ...state,
            projectDetails
        }
    }),
    on(loadProjectDetails_failure,(state)=>{
        return {
            ...state,
        }
    })
);