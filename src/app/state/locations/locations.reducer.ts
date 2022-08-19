import { createReducer, on } from '@ngrx/store';
import { CustomErrorResponse } from 'src/app/models/custom-error-response.model';
import { LocationModel } from 'src/app/models/location.model';
import { GetLocations, GetLocationsFail, GetLocationsSuccess, PutLocation, PutLocationFail, PutLocationSuccess } from './locations.actions';

export interface LocationsState {
	locations: LocationModel[];
	error?: CustomErrorResponse;
	loading: boolean;
}

export const initialState: LocationsState = {
	locations: [],
	loading: true
};

export const locationsReducer = createReducer(
	initialState,
	on(GetLocations, (state) => ({ ...state, loading: true })),
	on(GetLocationsSuccess, (state, { payload }) => ({ ...state, locations: payload, loading: false })),
	on(GetLocationsFail, (state, { payload }) => ({ ...state, error: payload, loading: false })),
	on(PutLocation, (state) => ({ ...state, loading: true })),
	on(PutLocationSuccess, (state) => ({ ...state, loading: false })),
	on(PutLocationFail, (state, { payload }) => ({ ...state, error: payload, loading: false }))
);
