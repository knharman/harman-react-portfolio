import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import './nav-link.css';

function NavLink({ title, url }) {
  const pathName = useLocation().pathname;
  const isCurrentPath = pathName.includes(url) || (pathName === '/' && url === 'about');
  return (
    <div className="NavLink">
      <Link to={url} className={isCurrentPath ? "selected" : ""}>{title}</Link>
    </div>
  );
}

export default NavLink;