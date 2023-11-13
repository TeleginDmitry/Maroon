export interface AccordionType {
    title: string
    body: string
}

export interface VolumeType {
    id: number
    amount: number
    unit: string
}

export interface ProductType {
    id: number
    image: string
    name: string
    title: string
    description: string
    accordion: AccordionType[]
    volumes: VolumeType[]
    price: number
}

export interface RecentlyProductType {
    id: number
    product: ProductType
}

export interface BasketProductType {
    id: number
    product: ProductType
    count: number
    isChecked: boolean
    volumes: VolumeType[]
}

export interface PatchRequestDataType {
    id: number
    count?: number
    isChecked?: boolean
}

export interface CreateRequestBasketType {
    id: number
    volume: number
}
