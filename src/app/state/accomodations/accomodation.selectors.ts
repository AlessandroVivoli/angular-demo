import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { AccomodationState } from './accomodation.reducer';

export const selectAccomodations = (state: AppState) => state.accomodations;
export const selectAllAccomodations = createSelector(selectAccomodations, (state: AccomodationState) => state.accomodations);
export const selectAccomodationError = createSelector(selectAccomodations, (state: AccomodationState) => state.error);
export const selectAccomodation = createSelector(selectAccomodations, (state: AccomodationState) => state.accomodation);
export const selectAccomodationLoading = createSelector(selectAccomodations, (state: AccomodationState) => state.loading);
