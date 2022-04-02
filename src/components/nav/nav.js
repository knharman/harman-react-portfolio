import NavLink from '../nav-link/nav-link';
import './nav.css';

function Nav() {
    const links = [
        {
            title: 'About',
            url: 'about'
        },
        {
            title: 'Projects',
            url: 'projects'
        },
        {
            title: 'Contact',
            url: 'contact'
        }, 
        {
            title: 'Resume',
            url: 'resume'
        }
    ]
    return (
        <div className="Nav">
            { 
                links.map(navLink => <NavLink title={navLink.title} url={navLink.url} key={navLink.url}/>) 
            }
        </div>
    );
}

export default Nav;