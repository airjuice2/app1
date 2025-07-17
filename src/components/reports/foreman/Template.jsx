import { Outlet } from 'react-router'
import Header from '@commonTemplate/Header'
import Footer from '@commonTemplate/Footer'

export default function Welcome() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}