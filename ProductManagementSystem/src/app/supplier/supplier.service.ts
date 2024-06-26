import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { Supplier } from "./supplier";

@Injectable({
    providedIn: 'root'
  })

  export class SupplierService{
    private supplierURL = "http://localhost:5086/api/SuppliersController/";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type' : 'application/json '
        })
    }

    constructor(private httpClient: HttpClient){}

    getAll(): Observable<any>{
        return this.httpClient.get(this.supplierURL + 'GetAll').pipe(
            catchError(this.errorHandler)
        )
    }

    find(id:number): Observable<any>{
        return this.httpClient.get(this.supplierURL + "GetById/" + id).pipe(
            catchError(this.errorHandler)
        )
    }

    create(supplier:Supplier): Observable<any>{
        return this.httpClient.post(this.supplierURL + "Add_Supplier/", JSON.stringify(supplier), this.httpOptions).pipe(
            catchError(this.errorHandler)
        )
    }

    update(id:number, supplier:Supplier): Observable<any>{
        return this.httpClient.put(this.supplierURL + "Edit_Supplier/" + id, JSON.stringify(supplier), this.httpOptions).pipe(
            catchError(this.errorHandler)
        )
    }

    delete(id: number){
        return this.httpClient.delete(this.supplierURL + "Delete_Supplier/" + id, this.httpOptions).pipe(
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