import './link.css';

function Link({ title, url }) {
  return (
    <div className="Link">
      <a href={url} target="_blank" rel="noreferrer">{title}</a>
    </div>
  );
}

export default Link;
