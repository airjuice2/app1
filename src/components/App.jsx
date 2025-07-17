import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page from './route/Page'
import Home from './Home'
import Test from './Test'
import NotFound from './NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../etc/style.css'

const queryClient = new QueryClient()

export default function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path="/" element={<Page />}>
                        <Route index element={<Home />}></Route>
                        <Route path="/test" element={<Test />}></Route>
                    </Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    )
}