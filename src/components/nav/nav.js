import NavLink from '../nav-link/nav-link';
import './nav.css';

function Nav() {
    const links = [
        {
            title: 'ABOUT',
            url: 'about'
        },
        {
            title: 'PROJECTS',
            url: 'projects'
        },
        {
            title: 'CONTACT',
            url: 'contact'
        }, 
        {
            title: 'RESUME',
            url: 'resume'
        }
    ]
    return (
        <ul className="Nav nav justify-content-center">
            { 
                links.map(navLink => 
                    <li className="nav-item p-4">
                        <NavLink title={navLink.title} url={navLink.url} key={navLink.url}/>
                    </li>
                ) 
            }
        </ul>
    );
}

export default Nav;