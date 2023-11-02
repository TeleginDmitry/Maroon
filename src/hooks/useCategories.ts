import { FILTER_PARAM } from 'configs/filter.config'
import { useSearchParams } from 'react-router-dom'

export function useCategories() {
    const [URLSearchParams] = useSearchParams()

    const categories = URLSearchParams.get(FILTER_PARAM)

    const categoriesArray = categories ? categories.split(',') : []

    return categoriesArray
}
