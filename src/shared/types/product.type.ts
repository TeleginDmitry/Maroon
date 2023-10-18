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
