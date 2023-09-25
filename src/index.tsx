import React from 'react'
import ReactDOM from 'react-dom/client'
import 'assets/styles/mixins.css'
import { router } from './router/router'
import { RouterProvider } from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
 
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
) 
 
