import styles from './Modules.module.scss'
import { Pagination } from './pagination/Pagination'
import { Navigation } from './navigation/Navigation'
import { NavigationType, PaginationType } from 'shared/types/slider.type'

interface Props {
    navigation: boolean | NavigationType
    pagination: boolean | PaginationType
}

export function Modules({ navigation, pagination }: Props) {
    return (
        <div className={styles.modules}>
            {pagination && <Pagination pagination={pagination}></Pagination>}
            {navigation && <Navigation navigation={navigation}></Navigation>}
        </div>
    )
}
