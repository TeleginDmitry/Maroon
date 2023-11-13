import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import React, { useEffect } from 'react'
import { isAuthSelector } from 'store/auth/auth.selectors'

interface Props {
    children: React.ReactNode
}

export const GetBasketProducts = ({ children }: Props) => {
    const { getBasketProducts } = useActions()

    const isAuth = useTypedSelector(isAuthSelector)

    useEffect(() => {
        if (isAuth) {
            getBasketProducts()
        }
    }, [isAuth])

    return <>{children}</>
}
