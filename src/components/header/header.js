import Name from '../name/name';
import Nav from '../nav/nav';
import './header.css';

function Header() {
    return (
        <div className="Header">
            <Nav />
            <Name />
        </div>
    );
}

export default Header;
