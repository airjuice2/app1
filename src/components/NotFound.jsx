import { Link } from 'react-router-dom'
import App from './App'

export default function NotFound() {
    return (<>
        <div>
            <Link to="/" element={<App />}>Домой</Link>
            <h1>404</h1>
        </div>
    </>)
}