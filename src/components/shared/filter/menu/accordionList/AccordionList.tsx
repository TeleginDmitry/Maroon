import { FilterType } from 'shared/types/filter.type'
import styles from './AccordionList.module.scss'
import { Accordion } from 'components/ui/accordion/Accordion'
import { Checkbox } from 'components/ui/checkbox/Checkbox'

interface Props {
    filters: FilterType[]
}

export function AccordionList({ filters }: Props) {
    return (
        <div className={styles.wrapper}>
            <Accordion className={styles.accordion}>
                {filters.map(({ items, id, title }) => {
                    return (
                        <Accordion.Item key={id} title={title}>
                            <ul className={styles.items}>
                                {items.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Checkbox>{item}</Checkbox>
                                        </li>
                                    )
                                })}
                            </ul>
                        </Accordion.Item>
                    )
                })}
            </Accordion>
        </div>
    )
}
