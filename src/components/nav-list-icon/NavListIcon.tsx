import { BaseList } from 'components/base-list/BaseList';
import { NavListIcomItem } from 'components/nav-list-icon-item/NavListIconItem';
import { navListIconData } from './navListIconData';
import { Item } from 'types/Item';

import styles from './navListIcon.module.css';


const NavListIcon = () => {
    return <BaseList
        data={navListIconData}
        renderItem={(item: Item) => <NavListIcomItem item={item} />}
        className={styles.nav__list_icons}
    />
}

export { NavListIcon };