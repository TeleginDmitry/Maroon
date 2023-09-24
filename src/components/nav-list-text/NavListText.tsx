import { navListTextData } from './navListTextData';
import { NavListTextItem } from 'components/nav-list-text-item/NavListTextItemText';

import { BaseList } from 'components/base-list/BaseList';
import { Item } from 'types/Item';

import styles from './navListText.module.css';


const NavListText = () => {
    return <BaseList 
        data={navListTextData} 
        renderItem={(item: Item) => <NavListTextItem item={item} />}
        className={styles.nav__list_text}
    />
}

export { NavListText }