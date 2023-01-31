import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ToastrService } from "ngx-toastr";
import { map, mergeMap } from "rxjs";

import { UserService } from "../user.service";
import { loginStart, loginSuccess, loginError } from "./login.action";

@Injectable()

export class loginEffects {
    constructor(private actions$: Actions, private userService: UserService, private router: Router) { }
    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            mergeMap((action) => {
                return this.userService.loginUser(action.userEmail, action.password)
                    .pipe(map((data: any) => {
                        console.log("effect ", data);
                        const user = data.find((a: any) => {
                            return a.email === action.userEmail && a.password === action.password
                        });
                        console.log("Userrr ",user);
                        if(user){
                            sessionStorage.setItem('token', user.id);
                            sessionStorage.setItem('username', user.name);
                            sessionStorage.setItem('email', user.email);
                            this.router.navigate(['/basic/details'])
                            .then(()=>window.location.reload());
                            return loginSuccess({ user });
                        }
                        else{
                            alert("Invalid credentials")
                            return loginError({error:"error"});
                        }

                    }))
            }));
    });
}