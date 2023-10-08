import { FilterType } from 'shared/types/filter.type'
import styles from './List.module.scss'
import { Checkbox } from 'components/ui/checkbox/Checkbox'

interface Props {
    filters: FilterType[]
}

export function List({ filters }: Props) {
    return (
        <ul className={styles.filters}>
            {filters.map(({ items, id, title }) => {
                return (
                    <li className={styles.filter} key={id}>
                        <h2 className={styles.title}>{title}</h2>
                        <ul className={styles.items}>
                            {items.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Checkbox>{item}</Checkbox>
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
