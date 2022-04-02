import './nav-link.css';

function NavLink({ title, url }) {
  return (
    <div className="NavLink">
      <a href={url}>{title}</a>
    </div>
  );
}

export default NavLink;