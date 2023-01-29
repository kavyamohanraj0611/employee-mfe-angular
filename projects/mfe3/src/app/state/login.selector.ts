import { createFeatureSelector, createSelector } from "@ngrx/store";

import { Login } from "../login.model";

const getLoginState = createFeatureSelector<any>('login');

export const getLoginDetails = createSelector(getLoginState, (state) => {
    // console.log(state)
    return state ? state.login : null;
});