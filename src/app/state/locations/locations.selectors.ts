import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { LocationsState } from './locations.reducer';

export const selectLocations = (state: AppState) => state.locations;
export const selectLocationsLoading = createSelector(selectLocations, (state: LocationsState) => state.loading);
export const selectAllLocations = createSelector(selectLocations, (state: LocationsState) => state.locations);
export const selectLocationsError = createSelector(selectLocations, (state: LocationsState) => state.error);
