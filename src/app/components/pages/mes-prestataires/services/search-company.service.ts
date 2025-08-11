import {Injectable} from "@angular/core";
import {GlobalService} from "../../../../services/global.service";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Category, Ville, EventType, SearchCriteria, RangeCriteria} from "../../../../models/global.model";
import {Company} from "../models/company.model";

@Injectable({
    providedIn: 'root'
})
export class SearchCompanyService extends GlobalService {

    constructor(private http: HttpClient) {
        super();
    }

    getMunicipalities(): Observable<Ville> {
        return this.http.get<Ville>(this.environnementLink + '/api/municipalities').pipe(catchError(this.handleError));
    }

    getArticleCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.environnementLink + '/api/articles-categories').pipe(catchError(this.handleError));
    }

    getEventType(): Observable<EventType[]> {
        return this.http.get<EventType[]>(this.environnementLink + '/api/type-events').pipe(catchError(this.handleError));
    }

    getServiceCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.environnementLink + '/api/service-categories').pipe(catchError(this.handleError));
    }

    searchQuery(services: SearchCriteria[], articles: SearchCriteria[], localisations: SearchCriteria[], event_types: SearchCriteria[]): Observable<Company[]> {
        return this.http.post<Company[]>(this.environnementLink + '/api/companies/search', {
            services, articles, localisations, event_types
        }).pipe(catchError(this.handleError));
    }
}
