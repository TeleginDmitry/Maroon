import { useMutation } from '@tanstack/react-query'
import { Button } from 'components/ui/button/Button'
import { productsService } from 'services/products.service'
import { useState } from 'react'
import { StatusNotificationType } from 'shared/types/notification.type'
import { Portal } from 'components/shared/portal/Portal'
import { CardNotification } from 'components/ui/cards/cardNotification/CardNotification'
import { VolumeType } from 'shared/types/product.type'

interface Props {
    id: number
    name: string
    title: string
    price: number
    image: string
    volumes: VolumeType[]
    selectedVolumes: number[]
}

export function AddBasket({ id, selectedVolumes, ...props }: Props) {
    const [status, setStatus] = useState<StatusNotificationType | null>(null)

    const { mutate, isLoading } = useMutation({
        mutationFn: async () => {
            const response = await productsService.createBasketProduct(
                id,
                selectedVolumes
            )
            return response
        },

        onSuccess() {
            changeStatus('success')
        },
        onError() {
            changeStatus('error')
        }
    })

    function changeStatus(value: StatusNotificationType | null) {
        setStatus(value)
    }

    function createProduct() {
        if (selectedVolumes.length) {
            mutate()
        }
    }

    return (
        <>
            <Button disabled={isLoading} onClick={createProduct}>
                Добавить в корзину
            </Button>
            {status && (
                <Portal elementId='notification'>
                    <CardNotification
                        {...props}
                        changeStatus={changeStatus}
                        status={status}
                    ></CardNotification>
                </Portal>
            )}
        </>
    )
}
