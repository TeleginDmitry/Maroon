import React from 'react'
import { AuthProvider } from './Auth.provider'

interface Props {
    children: React.ReactNode
}

export const CombineProvider = ({ children }: Props) => {
    return <AuthProvider>{children}</AuthProvider>
}
