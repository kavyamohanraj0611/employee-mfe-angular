import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { loadBasicDetails_success } from "projects/mfe1/src/app/state/basic.action";
import { catchError, from, map, mergeMap, of, switchMap, withLatestFrom } from "rxjs";
import { ProjectDetailsService } from "../project-details.service";
import { loadProjectDetails, loadProjectDetails_failure, loadProjectDetails_success, addprojectDetails } from "./project.action";
import { getAllProjectDetailsState } from "./project.selector";



@Injectable()

export class projectDetailsEffect {
    constructor(private actions$: Actions, private projectDetailService: ProjectDetailsService,private store:Store,private router:Router) { }
    loadProjectDetails$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadProjectDetails),
            switchMap((action) => {
                console.log("action ",action);
                return from(this.projectDetailService.getEmployeeProject()).pipe(
                    map((projectDetails)=>loadProjectDetails_success({projectDetails:projectDetails})),
                    catchError((error)=>of(loadProjectDetails_failure({error})))
                )
                
            }));
    });

    addProjectDetails$ = createEffect(
        ()=>
        this.actions$.pipe(
            ofType(addprojectDetails),
            mergeMap((action) => {
                return this.projectDetailService.addEmployeeProject({id:action.id, employeeName:action.employeeName,projectName:action.projectName,projectDescription:action.projectDescription,managerName:action.managerName})
                    .pipe(map((data: any) => {
                        console.log("effect ", data);
                        this.router.navigate(['/basic/details'])
                    }))
            })

        ),
    {dispatch:false}
    )
}