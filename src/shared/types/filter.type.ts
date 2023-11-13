export interface CategoryType {
    id: number
    name: string
}

export interface FilterType {
    id: number
    name: string
    categories: CategoryType[]
}

export type FilterParamsType = string[]

export type AddCategoryType = (category: string) => void
export type RemoveCategoryType = (category: string) => void
