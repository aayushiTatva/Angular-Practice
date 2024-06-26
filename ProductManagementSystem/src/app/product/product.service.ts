import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { Product } from "./product";

@Injectable({
    providedIn: 'root'
  })

  export class ProductService{
    private productURL = "http://localhost:5086/api/ProductController/";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type' : 'application/json '
        })
    }

    constructor(private httpClient: HttpClient){}

    getAll(): Observable<any>{
        return this.httpClient.get(this.productURL + 'Get_Products/').pipe(
            catchError(this.errorHandler)
        )
    }

    find(id:number): Observable<any>{
        return this.httpClient.get(this.productURL + "GetById/" + id).pipe(
            catchError(this.errorHandler)
        )
    }

    create(product:Product): Observable<any>{
        return this.httpClient.post(this.productURL + "Add_Product/", JSON.stringify(product), this.httpOptions).pipe(
            catchError(this.errorHandler)
        )
    }

    update(id:number, product:Product): Observable<any>{
        return this.httpClient.put(this.productURL + "Edit_Product/" + id, JSON.stringify(product), this.httpOptions).pipe(
            catchError(this.errorHandler)
        )
    }

    delete(id: number){
        return this.httpClient.delete(this.productURL + "Delete_Product/" + id, this.httpOptions).pipe(
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