import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { LocationState } from './location.reducer';

export const selectLocations = (state: AppState) => state.locations;
export const selectLocationLoading = createSelector(selectLocations, (state: LocationState) => state.loading);
export const selectAllLocations = createSelector(selectLocations, (state: LocationState) => state.locations);
export const selectLocationError = createSelector(selectLocations, (state: LocationState) => state.error);
