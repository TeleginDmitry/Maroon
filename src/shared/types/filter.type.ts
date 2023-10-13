export interface FilterType {
    id: number
    category: string
    title: string
    items: string[]
}

export type FilterParamsType = Record<string, string[]>
