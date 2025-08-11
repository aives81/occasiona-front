import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CompanyService} from "./services/company.service";
import {Company} from "./models/company.model";
import {NgOptimizedImage} from "@angular/common";
import {environment} from "../../../../environments/environment";
import {UtilitiesService} from "../../../utils/utilities.service";
import {PaginationComponent} from "../../layouts/pagination/pagination.component";
import {SearchCompanyService} from "./services/search-company.service";
import {Category, EventType, MunicipalityItem, SearchCriteria, Ville} from "../../../models/global.model";
import {Provenance} from "../../../utils/global.enum";
import {AppModule} from "../../../app.module";
import {PreloaderComponent} from "../../layouts/preloader/preloader.component";
import {LoaderComponent} from "../../layouts/loader/loader.component";

@Component({
    selector: 'app-mes-prestataires',
    standalone: true,
    imports: [
        RouterLink,
        NgOptimizedImage,
        PaginationComponent,
        LoaderComponent
    ],
    templateUrl: './mes-prestataires.component.html',
    styleUrl: './mes-prestataires.component.scss'
})
export class MesPrestatairesComponent implements OnInit {

    companies: Company[] = [];
    showLoader!: boolean;
    notFound: boolean = false;
    cities: MunicipalityItem[] = [];
    categorieArticles: Category[] = [];
    typeEvent: EventType[] = [];
    categorieServices: Category[] = [];
    criteria: SearchCriteria[] = [];
    typeEventCriteria: SearchCriteria[] = [];
    services: SearchCriteria[] = [];
    articles: SearchCriteria[] = [];
    localisations: SearchCriteria[] = [];

    constructor(private companyService: CompanyService, private searchCompanyService: SearchCompanyService) {
    }

    ngOnInit(): void {
        this.allCities();
        this.allArticleCategories();
        this.allEventType();
        this.allServiceCategories();
        this.getCompanies();
    }

    allCities() {
        this.searchCompanyService.getMunicipalities().subscribe({
            next: (response) => {
                this.cities = response.data;
            },
            error: (error) => {
                console.log(error);
            }
        });
    }

    allArticleCategories() {
        this.searchCompanyService.getArticleCategories().subscribe({
            next: (response) => {
                this.categorieArticles = response;
            },
            error: (error) => {
                console.log(error);
            }
        });
    }

    allEventType() {
        this.searchCompanyService.getEventType().subscribe({
            next: (response) => {
                this.typeEvent = response;
            },
            error: (error) => {
                console.log(error);
            }
        });
    }

    allServiceCategories() {
        this.searchCompanyService.getServiceCategories().subscribe({
            next: (response) => {
                this.categorieServices = response;
            },
            error: (error) => {
                console.log(error);
            }
        });
    }

    fillSearchCriteria(id: string, name: string, provenance: string) {
        const index = this.criteria.findIndex(item => item.id === id);

        if (index !== -1) {
            this.criteria.splice(index, 1);
        } else {
            this.criteria.push({ id: id, name: name, provenance: provenance });
        }

        setTimeout(() => {
            this.startSearch(this.criteria);
        }, 100);
    }

    startSearch(dataArray: SearchCriteria[]) {
        this.companies = [];
        this.services = [];
        this.articles = [];
        this.localisations = [];
        this.typeEventCriteria = [];
        this.notFound = false;
        this.showLoader = true;
        dataArray.forEach(item => {
            switch (item.provenance) {
                case Provenance.ARTICLES:
                    let articleObj = { id: item.id, name: item.name, provenance: item.provenance };
                    this.articles.push(articleObj);
                    break;

                case Provenance.SERVICES:
                    let serviceObj = { id: item.id, name: item.name, provenance: item.provenance };
                    this.services.push(serviceObj);
                    break;

                case Provenance.TYPE_EVENT:
                    let typeEventObj = { id: item.id, name: item.name, provenance: item.provenance };
                    this.typeEventCriteria.push(typeEventObj);
                    break;

                case Provenance.LOCALISATIONS:
                    let localisationObj = { id: item.id, name: item.name, provenance: item.provenance };
                    this.localisations.push(localisationObj);
                    break;

                default:
                    this.getCompanies()
                    break;
            }
        });
        this.searchCompanyService.searchQuery(this.services, this.articles, this.localisations, this.typeEventCriteria).subscribe({
            next: (response) => {
                this.companies = response;
                this.showLoader = true;
                setTimeout(() => {
                    this.showLoader = false;
                    this.notFound = this.companies.length == 0;
                    console.log('Is not found', this.notFound);
                }, 1000);
            }
        });

        // console.log(this.showLoader);
    }

    getCompanies() {
        this.showLoader = true;
        this.companies = [];
        this.companyService.getAllCompanies().subscribe({
            next: (response) => {
                this.companies = response;
                this.showLoader = false;
                this.notFound = this.companies.length === 0;
            },
            error: (error) => {
                this.showLoader = false;
                this.notFound = true;
            }
        });
    }

    protected readonly UtilitiesService = UtilitiesService;
}
