export interface Ville {
    data: MunicipalityItem[]
}

export interface MunicipalityItem {
    id: string,
    name: string,
    ville: string
}

export interface Category {
    id: string,
    name: string
}

export interface EventType {
    id: string,
    name: string
}

export interface SearchCriteria {
    id: string,
    name: string,
    provenance: string
}

export interface RangeCriteria {
    min: number,
    max: number
}
