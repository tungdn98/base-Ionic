import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {LoginVMReq} from '../../request/loginVMReq';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {url} from '../../Utils/Commons';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any;
  constructor(private http: HttpClient) {
  }

  authentication(loginvm: LoginVMReq): Observable<any> {
    return  this.http.post<LoginVMReq>(url + '/api/authenticate', loginvm, httpOptions).pipe(
      tap((idToken: any) => of(idToken)),
      catchError(error => of(error))
    );
  }

}
