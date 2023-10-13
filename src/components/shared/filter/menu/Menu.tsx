import { useQuery } from '@tanstack/react-query'
import styles from './Menu.module.scss'
import { filtersService } from 'services/filters.service'
import { FILTER_KEY } from 'configs/queryKeys.config'
import { Buttons } from './buttons/Buttons'
import { List } from './list/List'
import { AccordionList } from './accordionList/AccordionList'

export function Menu() {
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
            <AccordionList filters={data}></AccordionList>
            <List filters={data}></List>
            <Buttons></Buttons>
        </div>
    )
}
