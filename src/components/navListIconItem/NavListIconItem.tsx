import { ListItem } from 'types/ListItem.type'

interface INavListIcomItem {
    item: ListItem
}

const NavListIcomItem = ({ item }: INavListIcomItem) => {
    return (
        <li>
            <a href='#'>
                <img src={item.data} alt='source' />
            </a>
        </li>
    )
}

export { NavListIcomItem }
