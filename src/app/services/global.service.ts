import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

    header!: HttpHeaders;
    token!: string;
    environnementLink = environment.apiUrl;

    constructor() {
        this.token = localStorage.getItem('token') ?? '';
        this.header = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    }

    protected handleError(error: any) {
        console.error('An error occurred', error);
        return throwError(error.message || error);
    }
}
