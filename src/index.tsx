import ReactDOM from 'react-dom/client'
import 'assets/styles/mixins.css'
import { router } from './router/router'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from 'store'
import { CombineProvider } from 'providers/Combine.provider'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <CombineProvider>
                <RouterProvider router={router} />
            </CombineProvider>
        </QueryClientProvider>
    </Provider>
)
