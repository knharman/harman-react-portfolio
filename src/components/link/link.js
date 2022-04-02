import './link.css';

function Link({ title, url }) {
  return (
    <div className="Link">
      <a href={url}>{title}</a>
    </div>
  );
}

export default Link;
