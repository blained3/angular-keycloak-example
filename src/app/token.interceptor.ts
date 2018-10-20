import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { KeycloakService } from './keycloak.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private kcService: KeycloakService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.kcService.getToken() || '';
        request = request.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + authToken
            }
        });
        return next.handle(request);
    }
}
