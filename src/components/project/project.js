import './project.css';

function Project({ title, liveLink, githubLink, screenshot }) {
  return (
    <div className="Project">
      <h1>{title}</h1>
      <a href={liveLink}>Live Link</a>
      <a href={githubLink}>GitHub Link</a>
      <img src={screenshot} />
    </div>
  );
}

export default Project;
