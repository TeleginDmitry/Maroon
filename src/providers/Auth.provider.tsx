import { useActions } from 'hooks/useActions'
import React, { useEffect } from 'react'

interface Props {
    children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {
    const { verify } = useActions()

    useEffect(() => {
        verify()
    }, [])

    return <>{children}</>
}
