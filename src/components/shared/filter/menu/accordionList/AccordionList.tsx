import { FilterType } from 'shared/types/filter.type'
import styles from './AccordionList.module.scss'
import { Accordion } from 'components/ui/accordion/Accordion'
import { Checkbox } from 'components/ui/checkbox/Checkbox'

interface Props {
    filters: FilterType[]
    addFilter: (category: string) => void
    removeFilter: (category: string) => void
}

export function AccordionList({ filters, addFilter, removeFilter }: Props) {
    function toggleValue(isChecked: boolean, category: string) {
        if (isChecked) {
            removeFilter(category)
        } else {
            addFilter(category)
        }
    }
    return (
        <div className={styles.wrapper}>
            <Accordion className={styles.accordion}>
                {filters.map(({ categories, id, name }) => {
                    return (
                        <Accordion.Item key={id} title={name}>
                            <ul className={styles.categories}>
                                {categories.map(({ id, name }) => {
                                    return (
                                        <li key={id}>
                                            <Checkbox
                                                onToggle={(isChecked) =>
                                                    toggleValue(isChecked, name)
                                                }
                                            >
                                                {name}
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
