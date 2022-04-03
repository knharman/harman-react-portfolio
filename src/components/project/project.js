import './project.css';
import { useState } from 'react'

function Project({ title, liveLink, githubLink, screenshot }) {
  const [showText, toggleShowText] = useState(false);

  return (
    <div className="Project">
      <img className={showText ? "darkImage img-fluid" : "img-fluid"}
        src={screenshot}
        alt={title}
        onClick={() => toggleShowText(!showText)}
      />

      <h1 className="centered">{title}</h1>
      <div className="bottom-centered">
        <a className="mx-2" href={liveLink}>DEMO</a>
        <a href={githubLink}>GITHUB</a>
      </div>


    </div>
  );
}

export default Project;
