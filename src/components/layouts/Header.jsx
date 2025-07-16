import { Link } from "react-router"

export default function Header() {
    return (<>
        <nav>
            <Link to="/">Home</Link>
            <br />            
            <Link to="/test">Test</Link>
        </nav>
        <hr />
    </>)
}