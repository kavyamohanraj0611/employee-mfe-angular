import { createReducer } from "@ngrx/store";
import { on } from "@ngrx/store";

import { loginSuccess } from "./login.action";
import { initialState } from "./login.state";

export const loginReducer = createReducer(
    initialState,
    on(loginSuccess, (state, action) => {
        console.log("reducer state",state)
        console.log("reducer action",action)
        return {
            ...state,
            login:action.user
        }
    })
);