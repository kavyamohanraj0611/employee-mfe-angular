import { createAction, props } from "@ngrx/store";

import { Login } from "../login.model";

export const loginStart = createAction('[Login page] login start', props<{ userEmail: String, password: String }>());
export const loginSuccess = createAction('[Login page] login success', props<{ user: Login }>());
export const loginError = createAction('[Login page] login error', props<{ error: String }>());