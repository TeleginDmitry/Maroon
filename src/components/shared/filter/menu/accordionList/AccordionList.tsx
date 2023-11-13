import {
    AddCategoryType,
    FilterType,
    RemoveCategoryType
} from 'shared/types/filter.type'
import styles from './AccordionList.module.scss'
import { Accordion } from 'components/ui/accordion/Accordion'
import { Checkbox } from 'components/ui/checkbox/Checkbox'

interface Props {
    filters: FilterType[]
    addCategory: AddCategoryType
    removeCategory: RemoveCategoryType
}

export function AccordionList({ filters, addCategory, removeCategory }: Props) {
    function toggleValue(isChecked: boolean, category: string) {
        if (isChecked) {
            removeCategory(category)
        } else {
            addCategory(category)
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
                                                view='circle'
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
