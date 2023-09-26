import React from 'react'
import ReactDOM from 'react-dom/client'
import 'assets/styles/mixins.css'
import { Header } from 'components/layout/header/Header'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode><Header /></React.StrictMode>)
