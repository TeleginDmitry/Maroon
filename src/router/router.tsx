import { Layout } from 'components/layout/Layout'
import {
    Main,
    About,
    Basket,
    Catalog,
    Contacts,
    Profile,
    Product,
    Login,
    Register
} from 'components/screens'
import {
    MAIN_SCREEN,
    ABOUT_SCREEN,
    BASKET_SCREEN,
    CATALOG_SCREEN,
    CONTACTS_SCREEN,
    PROFILE_SCREEN,
    CATALOG_PRODUCT_SCREEN,
    LOGIN_SCREEN,
    REGISTER_SCREEN
} from 'configs/screens.config'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    {
        element: <Layout />,
        path: MAIN_SCREEN,
        children: [
            {
                element: <Main />,
                index: true
            },
            {
                element: <About />,
                path: ABOUT_SCREEN
            },
            {
                element: <Basket />,
                path: BASKET_SCREEN
            },
            {
                element: <Profile />,
                path: PROFILE_SCREEN
            },
            {
                element: <Contacts />,
                path: CONTACTS_SCREEN
            },
            {
                element: <Catalog />,
                path: CATALOG_SCREEN
            },
            {
                element: <Product />,
                path: CATALOG_PRODUCT_SCREEN + ':id'
            },
            {
                element: <Login />,
                path: LOGIN_SCREEN
            },
            {
                element: <Register />,
                path: REGISTER_SCREEN
            }
        ]
    }
])
