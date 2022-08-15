import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { LocationModel } from 'src/app/models/location.model';

export const GET_LOCATIONS = '[Locations] GET';
export const GET_LOCATIONS_SUCCESS = '[Locations] GET SUCCESS';
export const GET_LOCATIONS_FAIL = '[Locations] GET FAIL';

export const PUT_LOCATION = '[Location] PUT';
export const PUT_LOCATION_SUCCESS = '[Location] PUT SUCCESS';
export const PUT_LOCATION_FAIL = '[Location] PUT FAIL';

export const GetLocations = createAction(GET_LOCATIONS);
export const GetLocationsSuccess = createAction(GET_LOCATIONS_SUCCESS, props<{ payload: LocationModel[] }>());
export const GetLocationsFail = createAction(GET_LOCATIONS_FAIL, props<{ payload: HttpErrorResponse }>());

export const PutLocation = createAction(PUT_LOCATION, props<{ payload: LocationModel }>());
export const PutLocationSuccess = createAction(PUT_LOCATION_SUCCESS);
export const PutLocationFail = createAction(PUT_LOCATION_FAIL, props<{ payload: HttpErrorResponse }>());
