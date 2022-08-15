import { createReducer, on } from '@ngrx/store';
import { CustomErrorResponse } from 'src/app/models/custom-error-response.model';
import { LocationModel } from 'src/app/models/location.model';
import { GetLocations, GetLocationsFail, GetLocationsSuccess } from './location.actions';

export interface LocationState {
	locations: LocationModel[];
	error?: CustomErrorResponse;
	loading: boolean;
}

export const initialState: LocationState = {
	locations: [],
	loading: true
};

export const locationReducer = createReducer(
	initialState,
	on(GetLocations, (state) => ({ ...state, loading: true })),
	on(GetLocationsSuccess, (state, { payload }) => ({ ...state, locations: payload, loading: false })),
	on(GetLocationsFail, (state, { payload }) => ({ ...state, error: payload, loading: false }))
);
