import React from 'react'
import { AuthProvider } from './Auth.provider'
import { GetBasketProducts } from './GetBasketProducts.provider'

interface Props {
    children: React.ReactNode
}

export const CombineProvider = ({ children }: Props) => {
    return (
        <AuthProvider>
            <GetBasketProducts>{children}</GetBasketProducts>
        </AuthProvider>
    )
}
