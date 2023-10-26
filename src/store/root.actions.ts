import * as AuthActions from './auth/auth.actions'
import * as AuthReducers from './auth/auth.slice'

export const rootActions = {
    ...AuthActions,
    ...AuthReducers
}
