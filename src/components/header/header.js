import Name from '../name/name';
import Nav from '../nav/nav';
import './header.css';
import starHeader from '../../images/gifs/stars.gif'

function Header() {
    return (
        <div className="Header mb-5">
            <Nav />
            <Name />
            <img className="img-fluid" src={starHeader} alt="row of rainbow stars" />
        </div>
    );
}

export default Header;
