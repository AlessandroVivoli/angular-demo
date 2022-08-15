import { createReducer, on } from '@ngrx/store';
import { CustomErrorResponse } from 'src/app/models/custom-error-response.model';
import { LocationModel } from 'src/app/models/location.model';
import { GetLocation, GetLocationFail, GetLocationSuccess } from './location.actions';

export interface LocationState {
	location?: LocationModel;
	error?: CustomErrorResponse;
	loading: boolean;
}

export const initialState: LocationState = {
	loading: true
};

export const locationReducer = createReducer(
    initialState,
	on(GetLocation, (state) => ({ ...state, loading: true })),
	on(GetLocationSuccess, (state, { payload }) => ({ ...state, location: payload, loading: false })),
	on(GetLocationFail, (state, { payload }) => ({ ...state, error: payload, loading: false }))
);
