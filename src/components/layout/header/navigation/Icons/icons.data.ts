import person from '../../../assets/icons/person.svg';
import basket from '../../../assets/icons/basket.svg';
import { HeaderIcon } from 'shared/types/header.type';

const navListIconsData: HeaderIcon[] = [
    {
        id: 1,
        data: person,
        altData: 'человек',
    },

    {
        id: 2,
        data: basket,
        altData: 'корзина',
    }
]

export { navListIconsData }