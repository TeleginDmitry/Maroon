import React from 'react'
import ReactDOM from 'react-dom/client'
import 'assets/styles/mixins.css'
import { router } from './router/router'
import { RouterProvider } from 'react-router-dom'

import {Footer} from './components/layout/footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
 
    <React.StrictMode>
        <RouterProvider router={router} />
        <Footer/>
    </React.StrictMode>
)
 
