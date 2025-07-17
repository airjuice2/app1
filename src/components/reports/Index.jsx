import { Outlet } from 'react-router'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Link } from 'react-router'

export default function Index() {
    return (
        <>
            <div>
                <Link to="/reports/foreman">Мастер смены</Link>
            </div>
        </>
    )
}