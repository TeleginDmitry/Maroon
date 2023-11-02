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
    Register,
    NotFound
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
    REGISTER_SCREEN,
    NOT_FOUND_SCREEN
} from 'configs/screens.config'

import { createBrowserRouter } from 'react-router-dom'
import { CreateRecentlyProduct } from './CreateRecentlyProduct'

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
                element: <Login />,
                path: LOGIN_SCREEN
            },
            {
                element: <Register />,
                path: REGISTER_SCREEN
            },
            {
                element: <NotFound />,
                path: NOT_FOUND_SCREEN
            }
        ]
    },
    {
        element: <CreateRecentlyProduct></CreateRecentlyProduct>,
        path: MAIN_SCREEN,
        children: [
            {
                element: <Product />,
                path: CATALOG_PRODUCT_SCREEN + ':id'
            }
        ]
    }
])
