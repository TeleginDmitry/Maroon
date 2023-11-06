import { createPortal } from 'react-dom'

const PORTAL_ERROR_MSG = 'Данного элемента на странице, не существует.'

interface Props {
    children: React.ReactNode
    elementId: string
}

export function Portal({ children, elementId }: Props) {
    const element = document.getElementById(elementId)

    if (!element) throw Error(PORTAL_ERROR_MSG)

    return createPortal(children, element)
}
