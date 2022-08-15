import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { LocationState } from "./location.reducer";

export const selectLocation = (state: AppState) => state.location;
export const selectOneLocation = createSelector(selectLocation, (state: LocationState) => state.location);
export const selectLocationLoading = createSelector(selectLocation, (state: LocationState) => state.loading);
export const selectLocationError = createSelector(selectLocation, (state: LocationState) => state.error);