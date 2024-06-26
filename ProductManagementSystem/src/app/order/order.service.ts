import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { Order } from "./order";

@Injectable({
    providedIn: 'root'
  })

  export class OrderService{
    private orderURL = "http://localhost:5086/api/OrderController/";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type' : 'application/json '
        })
    }

    constructor(private httpClient: HttpClient){}

    getAll(): Observable<any>{
        return this.httpClient.get(this.orderURL + 'Get_Order/').pipe(
            catchError(this.errorHandler)
        )
    }

    find(id:number): Observable<any>{
        return this.httpClient.get(this.orderURL + "GetById/" + id).pipe(
            catchError(this.errorHandler)
        )
    }

    create(order:Order): Observable<any>{
        return this.httpClient.post(this.orderURL + "Add_Order/", JSON.stringify(order), this.httpOptions).pipe(
            catchError(this.errorHandler)
        )
    }

    update(id:number, order:Order): Observable<any>{
        return this.httpClient.put(this.orderURL + "Edit_Order/" + id, JSON.stringify(order), this.httpOptions).pipe(
            catchError(this.errorHandler)
        )
    }

    delete(id: number){
        return this.httpClient.delete(this.orderURL + "Delete_Order/" + id, this.httpOptions).pipe(
            catchError(this.errorHandler)
        )
    }

    errorHandler(error:any) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
          errorMessage = error.error.message;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
     }
  }