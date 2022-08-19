import { HttpErrorResponse } from '@angular/common/http';

export interface CustomErrorResponse extends HttpErrorResponse {
	readonly error: {
		errors: {
			id: string[];
		};
		status: number;
		title: string;
		traceId: string;
		type: string;
	};
}
