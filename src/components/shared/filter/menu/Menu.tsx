import { useQuery } from '@tanstack/react-query'
import styles from './Menu.module.scss'
import { filtersService } from 'services/filters.service'
import { FILTER_KEY } from 'configs/queryKeys.config'
import { Buttons } from './buttons/Buttons'
import { List } from './list/List'
import { AccordionList } from './accordionList/AccordionList'
import { useState } from 'react'
import { FilterParamsType } from 'shared/types/filter.type'

export function Menu() {
    const [filterParams, setFilterParams] = useState<FilterParamsType>({})

    const { data } = useQuery({
        queryFn: async () => {
            const response = await filtersService.getFilters()
            return response.data
        },
        queryKey: FILTER_KEY
    })

    function addFilter(category: string, value: string) {
        setFilterParams((state) => {
            if (state[category]) {
                state[category].push(value)
            } else {
                state[category] = [value]
            }

            return state
        })
    }

    function removeFilter(category: string, value: string) {
        setFilterParams((state) => {
            if (state[category]) {
                state[category] = state[category].filter(
                    (target) => target !== value
                )
            } else {
                delete state[category]
            }

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
