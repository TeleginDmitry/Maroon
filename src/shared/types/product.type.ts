export interface Accordion {
    title: string
    body: string
}

export interface Product {
    id: number
    image: string
    name: string
    title: string
    description: string
    accordion: Accordion[]
    volume: string
    price: number
}
