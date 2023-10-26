export interface UserType {
    id: number
    name: string
    email: string
    image: string
}

export interface PatchRequestType {
    email?: string
    password?: string
    name?: string
    image?: File | null
}
