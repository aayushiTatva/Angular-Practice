import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { Category } from "./category";

@Injectable({
    providedIn: 'root'
  })

  export class CategoryService{
    private categoryURL = "http://localhost:5086/api/CategoryController/";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type' : 'application/json '
        })
    }

    constructor(private httpClient: HttpClient){}

    getAll(): Observable<any>{
        return this.httpClient.get(this.categoryURL + 'Get_Categories/').pipe(
            catchError(this.errorHandler)
        )
    }

    find(id:number): Observable<any>{
        return this.httpClient.get(this.categoryURL + "GetById/" + id).pipe(
            catchError(this.errorHandler)
        )
    }

    create(category:Category): Observable<any>{
        return this.httpClient.post(this.categoryURL + "Add_Category/", JSON.stringify(category), this.httpOptions).pipe(
            catchError(this.errorHandler)
        )
    }

    update(id:number, category:Category): Observable<any>{
        return this.httpClient.put(this.categoryURL + "Edit_Category/" + id, JSON.stringify(category), this.httpOptions).pipe(
            catchError(this.errorHandler)
        )
    }

    delete(id: number){
        return this.httpClient.delete(this.categoryURL + "Delete_Category/" + id, this.httpOptions).pipe(
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