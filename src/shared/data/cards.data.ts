import cardOne from 'assets/images/cardOne.avif'
import cardTwo from 'assets/images/cardTwo.avif'
import { CATALOG_SCREEN } from 'configs/screens.config'

export const cards = [
    {
        id: 1,
        src: cardOne,
        title: 'Уход для лица',
        to: CATALOG_SCREEN
    },
    {
        id: 2,
        src: cardTwo,
        title: 'Уход для тела',
        to: CATALOG_SCREEN
    }
]
