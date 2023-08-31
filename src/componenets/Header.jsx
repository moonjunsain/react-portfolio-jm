import {Link, useLocation} from 'react-router-dom'

export default function Header(){
    const currentPage = useLocation().pathname

    return(
        <header className='px-3'>
            <h1>
                <Link
                to='/' className='link-underline link-underline-opacity-0'>
                    June Moon
                </Link>
            </h1>
            <nav className="nav">
                <li className="nav-item">
                    <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/About' className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>
                        About Me
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/Portfolio' className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
                        Portfolio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/Resume' className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
                        Resume
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/Contact' className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                        Contact
                    </Link>
                </li>
            </nav>
        </header>       
    )
}