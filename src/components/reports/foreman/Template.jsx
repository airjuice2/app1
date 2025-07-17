import { Outlet } from 'react-router'
import Header from '@commonTemplate/Header'
import Footer from '@commonTemplate/Footer'

export default function Template() {
    return (
        <>
        <Header />
        <Outlet />            
        </>
    )
}