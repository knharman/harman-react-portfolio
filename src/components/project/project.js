import './project.css';
import { useState } from 'react';
import sparkle1 from '../../images/gifs/sparkles1.gif';
import sparkle2 from '../../images/gifs/sparkles2.gif';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Project({ title, liveLink, githubLink, screenshot }) {
  const [showText, toggleShowText] = useState(false);

  const numSparkles = getRandomInt(4)

  return (
    <div className="Project">
      <img className={showText ? "darkImage img-fluid" : "img-fluid"}
        src={screenshot}
        alt={title}
        onClick={() => toggleShowText(!showText)}
      />
      {
        [...Array(numSparkles)].map((e, i) => <img className={`sparkle sparkle-border-${getRandomInt(7)}`} src={getRandomInt(2) === 0 ? sparkle1 : sparkle2} alt="sparkles" key={i} />)
      }
      <h1 className={`centered ${showText ? "" : "hideText"}`}>{title}</h1>
      <div className="bottom-centered">
        <a className={`mx-3 ${showText ? "" : "hideText"}`} href={liveLink}>DEMO</a>
        <a className={`mx-3 ${showText ? "" : "hideText"}`} href={githubLink}>GITHUB</a>
      </div>


    </div>
  );
}

export default Project;
