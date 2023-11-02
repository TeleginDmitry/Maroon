import { useQuery } from '@tanstack/react-query'
import styles from './Menu.module.scss'
import { filtersService } from 'services/filters.service'
import { FILTER_KEY } from 'configs/queryKeys.config'
import { Buttons } from './buttons/Buttons'
import { List } from './list/List'
import { useState } from 'react'
import { FilterParamsType } from 'shared/types/filter.type'
import { AccordionList } from './accordionList/AccordionList'
import { useCategories } from 'hooks/useCategories'

export function Menu() {
    const categories = useCategories()
    const [filterParams, setFilterParams] = useState<FilterParamsType>({
        categories
    })

    const { data } = useQuery({
        queryFn: async () => {
            const response = await filtersService.getFilters()
            return response.data
        },
        queryKey: FILTER_KEY
    })

    function addFilter(category: string) {
        setFilterParams((state) => {
            state.categories.push(category)

            return state
        })
    }

    function removeFilter(category: string) {
        setFilterParams((state) => {
            state.categories = state.categories.filter(
                (item) => item !== category
            )

            return state
        })
    }

    if (!data?.length) return null

    return (
        <div className={styles.wrapper}>
            <AccordionList
                addFilter={addFilter}
                removeFilter={removeFilter}
                filters={data}
            ></AccordionList>
            <List
                addFilter={addFilter}
                removeFilter={removeFilter}
                filters={data}
            ></List>
            <Buttons filterParams={filterParams}></Buttons>
        </div>
    )
}
