import './link.css';

function Link({ title, url, icon }) {
  return (
    <div className="Link p-5">
      <a href={url} target="_blank" rel="noreferrer">
        <img src={icon} alt={title} />
      </a>
    </div>
  );
}

export default Link;
