import { useState } from 'react'
import { FilterParamsType } from 'shared/types/filter.type'

export function useFilter(initialValue?: string[]) {
    const [categories, setCategories] = useState<FilterParamsType>(
        initialValue ?? []
    )

    function addCategory(category: string) {
        setCategories((state) => [...state, category])
    }

    function removeCategory(category: string) {
        setCategories((state) => state.filter((item) => item !== category))
    }

    return {
        categories,
        addCategory,
        removeCategory
    }
}
