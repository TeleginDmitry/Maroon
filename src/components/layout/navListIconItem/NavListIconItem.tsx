import { ListItem } from 'interface/ListItem.type'

interface INavListIcomItem {
    item: ListItem
}

const NavListIcomItem = ({ item }: INavListIcomItem) => {
    return (
        <li>
            <a href='#'>
                <img src={item.data} alt={item.altData} />
            </a>
        </li>
    )
}

export { NavListIcomItem }
