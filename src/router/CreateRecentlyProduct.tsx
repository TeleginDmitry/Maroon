import { useMutation } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { productsService } from 'services/products.service'
import { Layout } from 'components/layout/Layout'
import { useEffect } from 'react'

export function CreateRecentlyProduct() {
    const { id } = useParams<{ id: string }>()

    const { mutate } = useMutation({
        mutationFn: async (id: number) => {
            const response = await productsService.createRecentlyProduct(id)
            return response.data
        }
    })

    useEffect(() => {
        if (!id || typeof +id !== 'number') return
        mutate(+id)
    }, [])

    return <Layout />
}
