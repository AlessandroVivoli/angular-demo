import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { LocationModel } from "src/app/models/location.model";

export const GET_LOCATION = "[Location] GET";
export const GET_LOCATION_SUCCESS = "[Location] GET SUCCESS";
export const GET_LOCATION_FAIL = "[Location] GET FAIL";

export const GetLocation = createAction(GET_LOCATION, props<{ payload: string }>());
export const GetLocationSuccess = createAction(GET_LOCATION_SUCCESS, props<{ payload: LocationModel | undefined }>());
export const GetLocationFail = createAction(GET_LOCATION_FAIL, props<{ payload: HttpErrorResponse }>());