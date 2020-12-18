import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private _http: HttpClient) { }

  getCustomer():Observable<[]>{
    return this._http.get<[]>('http://api.com/customers')
    .pipe (catchError(this.errorHandler));
  }
  

  deleteCustomer(args):Observable<[]>{
    return this._http.delete<[]>('http://api.com/delete_customer/'+args)
    .pipe (catchError(this.errorHandler));
    
  }
  
  submitCustomer(args):Observable<[]>{
    console.log(args);
    return this._http.post<[]>('http://api.com/add_customer',args)
    .pipe (catchError(this.errorHandler));
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error.message|| "server error");
  }
}
