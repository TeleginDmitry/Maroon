import { Button } from 'components/ui/button/Button'
import styles from './Buttons.module.scss'
import { FilterParamsType } from 'shared/types/filter.type'
import { useSearchParams } from 'react-router-dom'

interface Props {
    filterParams: FilterParamsType
}

export function Buttons({ filterParams }: Props) {
    const [URLSearchParams, SetURLSearchParams] = useSearchParams()

    function completeFilters() {
        Object.keys(filterParams).forEach((category) => {
            const values = filterParams[category]

            if (!values.length) {
                URLSearchParams.delete(category)
            }

            URLSearchParams.set(category, values.toString())

            SetURLSearchParams(URLSearchParams)
        })
    }

    function clearFilters() {
        Object.keys(filterParams).forEach((category) => {
            URLSearchParams.delete(category)
        })

        SetURLSearchParams(URLSearchParams)
    }

    return (
        <div className={styles.wrapper}>
            <Button onClick={completeFilters}>Применить</Button>
            <Button onClick={clearFilters}>Сбросить</Button>
        </div>
    )
}
