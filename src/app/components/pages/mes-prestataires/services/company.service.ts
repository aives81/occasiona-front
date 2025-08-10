import {Injectable} from '@angular/core';
import {catchError, Observable} from "rxjs";
import {Company} from "../models/company.model";
import {GlobalService} from "../../../../services/global.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CompanyService extends GlobalService {

    constructor(private http: HttpClient) {
        super();
    }

    getAllCompanies(): Observable<Company[]> {
        return this.http.get<Company[]>(this.environnementLink + '/api/companies').pipe(catchError(this.handleError));
    }
}
