import { createSelector } from "@ngrx/store";

export const getProjectDetailState = (state:any)=>state;

export const getAllProjectDetailsState = createSelector(getProjectDetailState, (state) => {
    console.log(state)
    return state.projectDetails;
});