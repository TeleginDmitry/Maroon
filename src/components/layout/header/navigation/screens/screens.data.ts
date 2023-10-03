import { ReactComponent as Person } from 'assets/icons/person.svg'
import { ReactComponent as Basket } from 'assets/icons/basket.svg'
import { ABOUT_SCREEN, BASKET_SCREEN, CATALOG_SCREEN, CONTACTS_SCREEN, PROFILE_SCREEN } from 'configs/screens.config'

export const iconsLinks = [
    {
        id: 1,
        to: PROFILE_SCREEN,
        Icon: Person,
    },

    {
        id: 2,
        to: BASKET_SCREEN,
        Icon: Basket, 
    },
]

export const textLinks = [
    {
        id: 1,
        to: CATALOG_SCREEN, 
        data: "Каталог",
    },

    {
        id: 2,
        to: ABOUT_SCREEN, 
        data: "О нас",

    },

    {
        id: 3,
        to: CONTACTS_SCREEN,
        data: "Контакты",
    },
]