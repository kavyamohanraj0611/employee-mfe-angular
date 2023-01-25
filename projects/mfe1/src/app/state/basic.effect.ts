import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, from, map, mergeMap, of, switchMap, withLatestFrom } from "rxjs";

import { BasicDetailsService } from "../basic-details.service";
import { employeeBasic } from "../employee-basic-model";
import { addBasicDetails, loadBasicDetails, loadBasicDetails_failure, loadBasicDetails_success } from "./basic.action";
import { getAllBasicDetailState } from "./basic.selector";

@Injectable()

export class basicDetailsEffect {
    constructor(private actions$: Actions, private basicDetailService: BasicDetailsService,private store:Store) { }
    loadBasicDetails$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadBasicDetails),
            switchMap((action) => {
                console.log("action ",action);
                return from(this.basicDetailService.getEmployeeBasic()).pipe(
                    map((basicDetails)=>loadBasicDetails_success({basicDetails:basicDetails})),
                    catchError((error)=>of(loadBasicDetails_failure({error})))
                )
                
                // return this.basicDetailService.addEmployeeBasic(action.basicDetails)
                //     .pipe(map((data: employeeBasic) => {
                //         console.log("effect ", data);
                //         const employee=data;
                //         // this.basicDetailService.addEmployeeBasic(employee);
                //         // this.router.navigate(['/home']).then(()=>window.location.reload());
                //         return loadBasicDetails_success({basicDetails:[data]});
                //     }))
            }));
    });

    addBasicDetails$ = createEffect(
        ()=>
        this.actions$.pipe(
            ofType(addBasicDetails),
            withLatestFrom(this.store.select(getAllBasicDetailState)),
            switchMap(([action,basicDetails])=>from(this.basicDetailService.addEmployeeBasic(basicDetails)))
        ),
    {dispatch:false}
    )
}