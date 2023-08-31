import {Link, useLocation} from 'react-router-dom'

export default function Header(){
    const currentPage = useLocation().pathname

    return(
        <header>
            <nav className="nav">
                <li className="nav-link active" aria-current="page" href="#">Active</li>
                <li className="nav-link" href="#">Link</li>
                <li className="nav-link" href="#">Link</li>
            </nav>
        </header>       
    )
}