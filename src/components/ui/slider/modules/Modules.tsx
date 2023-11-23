import styles from './Modules.module.scss'
import { Pagination } from '../../pagination/Pagination'
import { Navigation } from '../../navigation/Navigation'
import { SliderContext } from 'contexts/Slider.context'
import { useContext } from 'react'
import { ModulesClasses } from 'shared/types/slider.type'

export function Modules({
    classNameNavigation,
    classNamePagination
}: ModulesClasses) {
    const { swipeLeft, swipeRight, totalCount, indexActive } =
        useContext(SliderContext)

    return (
        <div className={styles.modules}>
            <Pagination
                valueLeft={indexActive! + 1}
                valueRight={totalCount!}
                className={classNamePagination}
            ></Pagination>
            <Navigation
                onClickLeft={swipeLeft}
                onClickRight={swipeRight}
                className={classNameNavigation}
            ></Navigation>
        </div>
    )
}
