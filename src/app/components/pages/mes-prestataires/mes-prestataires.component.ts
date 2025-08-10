import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CompanyService} from "./services/company.service";
import {Company} from "./models/company.model";
import {NgOptimizedImage} from "@angular/common";
import {environment} from "../../../../environments/environment";
import {UtilitiesService} from "../../../utils/utilities.service";
import {PaginationComponent} from "../../layouts/pagination/pagination.component";

@Component({
    selector: 'app-mes-prestataires',
    standalone: true,
    imports: [
        RouterLink,
        NgOptimizedImage,
        PaginationComponent
    ],
    templateUrl: './mes-prestataires.component.html',
    styleUrl: './mes-prestataires.component.scss'
})
export class MesPrestatairesComponent implements OnInit {

    companies: Company[] = [];
    isLoading: boolean = false;
    showLoader!: boolean;
    notFound: boolean = false;

    constructor(private companyService: CompanyService) {
    }

    ngOnInit(): void {
        this.getCompanies();
    }

    getCompanies() {
        this.isLoading = true;
        this.showLoader = true;
        this.companyService.getAllCompanies().subscribe({
            next: (response) => {
                this.companies = response;
                if (this.companies.length) {
                    this.isLoading = false;
                    this.showLoader = false;
                } else if (this.companies.length == 0) {
                    this.showLoader = false;
                    this.notFound = true;
                }
            },
            error: (error) => {
                this.isLoading = false;
                this.showLoader = false;
                console.log(error);
            }
        });
    }

    protected readonly UtilitiesService = UtilitiesService;
}
