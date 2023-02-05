import { createSelector } from "@ngrx/store";
import { BasicDetailState } from "./basic.reducer";
import { AppState } from "./basic.state";

export const getBasicDetailState = (state:any)=>state;

export const getAllBasicDetailState = createSelector(getBasicDetailState, (state) => {
    return state.basicDetails?.basicDetails;
});