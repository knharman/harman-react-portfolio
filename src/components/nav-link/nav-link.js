import { Link } from 'react-router-dom';
import './nav-link.css';

function NavLink({ title, url }) {
  return (
    <div className="NavLink">
      <Link to={url}>{title}</Link>
    </div>
  );
}

export default NavLink;