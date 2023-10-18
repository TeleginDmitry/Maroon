import styles from './Pagination.module.scss'
import { ReactComponent as Line } from 'assets/icons/line.svg'
import { useContext } from 'react'
import { SliderContext } from 'contexts/Slider.context'
import { PaginationType } from 'shared/types/slider.type'
import { classNames } from 'utils/classNames/classNames'
import { justifyContent } from 'shared/selectors/position/position'

interface Props {
    pagination: boolean | PaginationType
}

export function Pagination({ pagination }: Props) {
    const { totalCount, indexActive } = useContext(SliderContext)

    const { className = '', position = 'center' } =
        typeof pagination === 'object' ? pagination : {}

    return (
        <div
            className={classNames(
                styles.pagination,
                {
                    [className]: !!className
                },
                [justifyContent[position]]
            )}
        >
            <p className={styles.page}>{indexActive! + 1}</p>
            <Line></Line>
            <p className={styles.page}>{totalCount}</p>
        </div>
    )
}
