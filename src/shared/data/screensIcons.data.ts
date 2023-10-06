import { ReactComponent as Person } from 'assets/icons/person.svg'
import { ReactComponent as Basket } from 'assets/icons/basket.svg'
import { BASKET_SCREEN, PROFILE_SCREEN } from 'configs/screens.config'

export const screensIcons = [
    {
        id: 1,
        to: PROFILE_SCREEN,
        Icon: Person
    },

    {
        id: 2,
        to: BASKET_SCREEN,
        Icon: Basket
    }
]
