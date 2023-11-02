import { FilterType } from 'shared/types/filter.type'
import styles from './List.module.scss'
import { Checkbox } from 'components/ui/checkbox/Checkbox'
import { useCategories } from 'hooks/useCategories'

interface Props {
    filters: FilterType[]
    addFilter: (category: string) => void
    removeFilter: (category: string) => void
}

export function List({ filters, addFilter, removeFilter }: Props) {
    const categoriesArray = useCategories()

    function toggleValue(isChecked: boolean, category: string) {
        if (isChecked) {
            removeFilter(category)
        } else {
            addFilter(category)
        }
    }

    return (
        <ul className={styles.filters}>
            {filters.map(({ categories, id, name }) => {
                return (
                    <li className={styles.filter} key={id}>
                        <h2 className={styles.title}>{name}</h2>
                        <ul className={styles.categories}>
                            {categories.map(({ name, id }) => {
                                return (
                                    <li key={id}>
                                        <Checkbox
                                            onToggle={(isChecked) =>
                                                toggleValue(isChecked, name)
                                            }
                                            initialState={categoriesArray.includes(
                                                name
                                            )}
                                        >
                                            {name}
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
