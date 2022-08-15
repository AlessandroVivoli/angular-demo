import { HttpErrorResponse, HttpEventType, HttpHeaders } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { AccomodationModel } from 'src/app/models/accomodation.model';
import { CustomErrorResponse } from 'src/app/models/custom-error-response.model';
import {
	DeleteAccomodation,
	DeleteAccomodationFail,
	DeleteAccomodationSuccess,
	GetAccomodation,
	GetAccomodationFail,
	GetAccomodations,
	GetAccomodationsFail,
	GetAccomodationsSuccess,
	GetAccomodationSuccess,
	GetLocationAccomodations,
	GetLocationAccomodationsFail,
	GetLocationAccomodationsSuccess,
	GetRecommendations,
	GetRecommodationsFail,
	GetRecommodationsSuccess,
	PostAccomodation,
	PostAccomodationFail,
	PostAccomodationSuccess,
	PutAccomodation,
	PutAccomodationFail,
	PutAccomodationSuccess,
} from './accomodation.actions';

export interface AccomodationState {
	accomodations: AccomodationModel[];
	accomodation?: AccomodationModel;
	error?: CustomErrorResponse;
	loading: boolean;
}

export const initialState: AccomodationState = {
	accomodations: [],
	loading: true,
};

export const accomodationReducer = createReducer(
	initialState,
	on(GetAccomodations, (state) => ({ ...state, loading: true })),
	on(GetAccomodationsSuccess, (state, { payload }) => ({ ...state, accomodations: payload, loading: false })),
	on(GetAccomodationsFail, (state, { payload }) => ({ ...state, error: payload, loading: false })),
	on(PostAccomodation, (state) => ({ ...state, loading: true })),
	on(PostAccomodationSuccess, (state) => ({ ...state, loading: false })),
	on(PostAccomodationFail, (state, { payload }) => ({ ...state, error: payload, loading: false })),
	on(GetRecommendations, (state) => ({ ...state, loading: true })),
	on(GetRecommodationsSuccess, (state, { payload }) => ({ ...state, accomodations: payload, loading: false })),
	on(GetRecommodationsFail, (state, { payload }) => ({ ...state, error: payload, loading: false })),
	on(GetLocationAccomodations, (state) => ({ ...state, loading: true })),
	on(GetLocationAccomodationsSuccess, (state, { payload }) => ({ ...state, accomodations: payload, loading: false })),
	on(GetLocationAccomodationsFail, (state, { payload }) => ({ ...state, error: payload, loading: false })),
	on(GetAccomodation, (state) => ({ ...state, loading: true })),
	on(GetAccomodationSuccess, (state, { payload }) => ({ ...state, accomodation: payload, loading: false })),
	on(GetAccomodationFail, (state, { payload }) => ({ ...state, error: payload, loading: false })),
	on(DeleteAccomodation, (state) => ({ ...state, loading: true })),
	on(DeleteAccomodationSuccess, (state) => ({ ...state, loading: false })),
	on(DeleteAccomodationFail, (state, { payload }) => ({ ...state, error: payload, loading: false })),
	on(PutAccomodation, (state) => ({ ...state, loading: true })),
	on(PutAccomodationSuccess, (state) => ({ ...state, loading: false })),
	on(PutAccomodationFail, (state, { payload }) => ({ ...state, error: payload, loading: false }))
);
