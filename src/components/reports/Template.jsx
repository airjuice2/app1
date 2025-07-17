import { Outlet } from 'react-router'
import Header from '@commonTemplate/Header'

export default function Reports() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}