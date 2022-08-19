import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { AccomodationModel, PostAccomodationModel } from '../../models/accomodation.model';

export const GET_ACCOMODATIONS = '[Accomodations] GET';
export const GET_ACCOMODATIONS_SUCCESS = '[Accomodations] GET SUCCESS';
export const GET_ACCOMODATIONS_FAIL = '[Accomodations] GET FAIL';

export const POST_ACCOMODATION = '[Accomodation] POST';
export const POST_ACCOMODATION_SUCCESS = '[Accomodation] POST SUCCESS';
export const POST_ACCOMODATION_FAIL = '[Accomodation] POST FAIL';

export const GET_RECOMMENDATIONS = '[Recommendations] GET';
export const GET_RECOMMENDATIONS_SUCCESS = '[Recommendations] GET SUCCESS';
export const GET_RECOMMENDATIONS_FAIL = '[Recommendations] GET FAIL';

export const GET_LOCATION_ACCOMODATIONS = '[LocationAccomodations] GET';
export const GET_LOCATION_ACCOMODATIONS_SUCCESS = '[LocationAccomodations] GET SUCCESS';
export const GET_LOCATION_ACCOMODATIONS_FAIL = '[LocationAccomodations] GET FAIL';

export const GET_ACCOMODATION = '[Accomodation] GET';
export const GET_ACCOMODATION_SUCCESS = '[Accomodation] GET SUCCESS';
export const GET_ACCOMODATION_FAIL = '[Accomodation] GET FAIL';

export const DELETE_ACCOMODATION = '[Accomodation] DELETE';
export const DELETE_ACCOMODATION_SUCCESS = '[Accomodation] DELETE SUCCESS';
export const DELETE_ACCOMODATION_FAIL = '[Accomodation] DELETE FAIL';

export const PUT_ACCOMODATION = '[Accomodation] PUT';
export const PUT_ACCOMODATION_SUCCESS = '[Accomodation] PUT SUCCESS';
export const PUT_ACCOMODATION_FAIL = '[Accomodation] PUT FAIL';

export const GetAccomodations = createAction(GET_ACCOMODATIONS);
export const GetAccomodationsSuccess = createAction(GET_ACCOMODATIONS_SUCCESS, props<{ payload: AccomodationModel[] }>());
export const GetAccomodationsFail = createAction(GET_ACCOMODATIONS_FAIL, props<{ payload: HttpErrorResponse }>());

export const PostAccomodation = createAction(POST_ACCOMODATION, props<{ payload: PostAccomodationModel }>());
export const PostAccomodationSuccess = createAction(POST_ACCOMODATION_SUCCESS);
export const PostAccomodationFail = createAction(POST_ACCOMODATION_FAIL, props<{ payload: HttpErrorResponse }>());

export const GetRecommendations = createAction(GET_RECOMMENDATIONS);
export const GetRecommodationsSuccess = createAction(GET_RECOMMENDATIONS_SUCCESS, props<{ payload: AccomodationModel[] }>());
export const GetRecommodationsFail = createAction(GET_RECOMMENDATIONS_FAIL, props<{ payload: HttpErrorResponse }>());

export const GetLocationAccomodations = createAction(GET_LOCATION_ACCOMODATIONS, props<{ payload: string }>());
export const GetLocationAccomodationsSuccess = createAction(GET_LOCATION_ACCOMODATIONS_SUCCESS, props<{ payload: AccomodationModel[] }>());
export const GetLocationAccomodationsFail = createAction(GET_ACCOMODATIONS_FAIL, props<{ payload: HttpErrorResponse }>());

export const GetAccomodation = createAction(GET_ACCOMODATION, props<{ payload: string }>());
export const GetAccomodationSuccess = createAction(GET_ACCOMODATION_SUCCESS, props<{ payload: AccomodationModel }>());
export const GetAccomodationFail = createAction(GET_ACCOMODATION_FAIL, props<{ payload: HttpErrorResponse }>());

export const DeleteAccomodation = createAction(DELETE_ACCOMODATION, props<{ payload: string }>());
export const DeleteAccomodationSuccess = createAction(DELETE_ACCOMODATION_SUCCESS);
export const DeleteAccomodationFail = createAction(DELETE_ACCOMODATION_FAIL, props<{ payload: HttpErrorResponse }>());

export const PutAccomodation = createAction(PUT_ACCOMODATION, props<{ payload: AccomodationModel }>());
export const PutAccomodationSuccess = createAction(PUT_ACCOMODATION_SUCCESS);
export const PutAccomodationFail = createAction(PUT_ACCOMODATION_FAIL, props<{ payload: HttpErrorResponse }>());
