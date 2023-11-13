import { useQuery } from '@tanstack/react-query'
import styles from './Menu.module.scss'
import { filtersService } from 'services/filters.service'
import { FILTER_KEY } from 'configs/queryKeys.config'
import { Buttons } from './buttons/Buttons'
import { List } from './list/List'
import { AccordionList } from './accordionList/AccordionList'
import { useCategories } from 'hooks/useCategories'
import { useFilter } from 'hooks/useFilter'

export function Menu() {
    const initialCategories = useCategories()
    const { addCategory, categories, removeCategory } =
        useFilter(initialCategories)

    const { data } = useQuery({
        queryFn: async () => {
            const response = await filtersService.getFilters()
            return response.data
        },
        queryKey: FILTER_KEY
    })

    if (!data?.length) return null

    return (
        <div className={styles.wrapper}>
            <AccordionList
                addCategory={addCategory}
                removeCategory={removeCategory}
                filters={data}
            ></AccordionList>
            <List
                addCategory={addCategory}
                removeCategory={removeCategory}
                filters={data}
            ></List>
            <Buttons filterParams={categories}></Buttons>
        </div>
    )
}
