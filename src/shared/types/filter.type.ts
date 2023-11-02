export interface CategoryType {
    id: number
    name: string
}

export interface FilterType {
    id: number
    name: string
    categories: CategoryType[]
}

export interface FilterParamsType {
    categories: string[]
}
