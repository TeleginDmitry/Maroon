import { FilterType } from 'shared/types/filter.type'
import styles from './List.module.scss'
import { Checkbox } from 'components/ui/checkbox/Checkbox'

interface Props {
    filters: FilterType[]
    addFilter: (category: string, value: string) => void
    removeFilter: (category: string, value: string) => void
}

export function List({ filters, addFilter, removeFilter }: Props) {
    function toggleValue(isChecked: boolean, category: string, item: string) {
        if (isChecked) {
            removeFilter(category, item)
        } else {
            addFilter(category, item)
        }
    }

    return (
        <ul className={styles.filters}>
            {filters.map(({ items, id, title, category }) => {
                return (
                    <li className={styles.filter} key={id}>
                        <h2 className={styles.title}>{title}</h2>
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
                    </li>
                )
            })}
        </ul>
    )
}
