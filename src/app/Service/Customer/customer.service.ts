import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {LoginVMReq} from '../../request/loginVMReq';

import {url} from '../../Utils/Commons';
import {catchError, tap} from 'rxjs/operators';
import {AuthService} from '../authService/auth.service';
import {Customer} from "../../Models/Customer";
import {DeleteCustomerRequest} from "../../request/DeleteCustomerRequest";
const httpOptions = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  headers: new HttpHeaders({'Authorization':sessionStorage.getItem('token')})
};


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  getCustomer(page, size): Observable<any> {
    return this.http.post<LoginVMReq>(url + '/api/getall?page='+page+'&size='+size+'&sort=DESC',null,httpOptions
      ).pipe(
      tap((data: any) => of(data)),
      catchError(error => of(error))
    );
  }

  addCustomer(customer: Customer): Observable<any> {
    return  this.http.post<Customer>(url + '/api/customers', customer, httpOptions).pipe(
      tap((data: any) => of(data)),
      catchError(error => of(error))
    );
  }

  updateCustomer(customer: Customer): Observable<any> {
    return  this.http.put<Customer>(url + '/api/customers', customer, httpOptions).pipe(
      tap((data: any) => of(data)),
      catchError(error => of(error))
    );
  }

  deleteCustomer(deletereq: DeleteCustomerRequest): Observable<any> {
    return this.http.delete<DeleteCustomerRequest>(url + '/api/customers?id='+deletereq.id,httpOptions).pipe(
      tap((data: any) => of(data)),
      catchError(error => of(error))
    );
  }


}
