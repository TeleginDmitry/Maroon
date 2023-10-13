import ReactDOM from 'react-dom/client'
import 'assets/styles/mixins.css'

import { router } from './router/router'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// убрать  networkMode: 'always'
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            networkMode: 'always'
        }
    }
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
)
