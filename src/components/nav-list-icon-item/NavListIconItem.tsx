import { Item } from "types/Item";

interface INavListIcomItem {
    item: Item
}

const NavListIcomItem = ({ item }: INavListIcomItem) => {
    return (
        <li>
            <a href="#">
                <img src={item.data} alt="source" />
            </a>
        </li>
        
    )
}

export { NavListIcomItem };