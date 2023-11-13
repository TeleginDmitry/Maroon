import * as AuthActions from './auth/auth.actions'
import * as AuthReducers from './auth/auth.slice'
import * as BasketActions from './products/basket/basket.actions'
import * as BasketReducers from './products/basket/basket.slice'

export const rootActions = {
    ...AuthActions,
    ...AuthReducers,
    ...BasketActions,
    ...BasketReducers
}
