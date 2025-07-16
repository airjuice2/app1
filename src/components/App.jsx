import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../etc/style.css'

const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>

                <Link to="/about">О нас</Link>

                <Routes>                    
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}