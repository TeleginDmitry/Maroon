import { ReactComponent as Success } from 'assets/icons/success.svg'
import { ReactComponent as Error } from 'assets/icons/error.svg'

interface Props {
    isError: boolean
    isShow: boolean
    className?: string
}

export function InputStatus({ isError, isShow, className }: Props) {
    if (!isShow) return null

    if (isError) {
        return <Error className={className}></Error>
    } else {
        return <Success className={className}></Success>
    }
}
