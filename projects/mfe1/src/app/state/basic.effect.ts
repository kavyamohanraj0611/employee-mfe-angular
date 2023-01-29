import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, from, map, mergeMap, of, switchMap, withLatestFrom } from "rxjs";

import { BasicDetailsService } from "../basic-details.service";
import { employeeBasic } from "../employee-basic-model";
import { addBasicDetails, loadBasicDetails, loadBasicDetails_failure, loadBasicDetails_success } from "./basic.action";
import { getAllBasicDetailState } from "./basic.selector";

@Injectable()

export class basicDetailsEffect {
    constructor(private actions$: Actions, private basicDetailService: BasicDetailsService,private store:Store,private router:Router) { }
    loadBasicDetails$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadBasicDetails),
            switchMap((action) => {
                console.log("action ",action);
                return from(this.basicDetailService.getEmployeeBasic()).pipe(
                    map((basicDetails)=>loadBasicDetails_success({basicDetails:basicDetails})),
                    catchError((error)=>of(loadBasicDetails_failure({error})))
                )
                
            }));
    });

    addBasicDetails$ = createEffect(
        ()=>
        this.actions$.pipe(
            ofType(addBasicDetails),
            mergeMap((action) => {
                return this.basicDetailService.addEmployeeBasic({id:action.id, employeeName:action.employeeName,employeeDepartment:action.employeeDepartment,employeeEmail:action.employeeEmail,employeePhoneNumber:action.employeePhoneNumber})
                    .pipe(map((data: any) => {
                        console.log("effect ", data);
                        this.router.navigate(['/basic/details'])
                    }))
            })

        ),
        
    {dispatch:false}
    )
}