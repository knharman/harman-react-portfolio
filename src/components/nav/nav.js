import NavLink from '../nav-link/nav-link';
import './nav.css';

function Nav() {
    const links = [
        {
            title: 'About',
            url: '#'
        },
        {
            title: 'Portfolio',
            url: '#'
        },
        {
            title: 'Contact',
            url: '#'
        }, 
        {
            title: 'Resume',
            url: '#'
        }
    ]
    return (
        <div className="Nav">
            { 
                links.map(navLink => <NavLink title={navLink.title} url={navLink.url} />) 
            }
        </div>
    );
}

export default Nav;