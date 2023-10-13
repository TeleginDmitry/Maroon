import { FilterType } from 'shared/types/filter.type'
import styles from './AccordionList.module.scss'
import { Accordion } from 'components/ui/accordion/Accordion'
import { Checkbox } from 'components/ui/checkbox/Checkbox'

interface Props {
    filters: FilterType[]
    addFilter: (category: string, value: string) => void
    removeFilter: (category: string, value: string) => void
}

export function AccordionList({ filters, addFilter, removeFilter }: Props) {
    function toggleValue(isChecked: boolean, category: string, item: string) {
        if (isChecked) {
            removeFilter(category, item)
        } else {
            addFilter(category, item)
        }
    }
    return (
        <div className={styles.wrapper}>
            <Accordion className={styles.accordion}>
                {filters.map(({ items, id, title, category }) => {
                    return (
                        <Accordion.Item key={id} title={title}>
                            <ul className={styles.items}>
                                {items.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Checkbox
                                                onToggle={(isChecked) =>
                                                    toggleValue(
                                                        isChecked,
                                                        category,
                                                        item
                                                    )
                                                }
                                            >
                                                {item}
                                            </Checkbox>
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
