import Project from '../project/project';
import './projects.css';

function Projects() {
  const projects = [
    {
      title: "First Project",
      liveLink: "#",
      githubLink: "#",
      screenshot: "#"
    },
    {
      title: "Second Project",
      liveLink: "#",
      githubLink: "#",
      screenshot: "#"
    },
    {
      title: "Third Project",
      liveLink: "#",
      githubLink: "#",
      screenshot: "#"
    }
  ]
  return (
    <div className="Projects">
      {
        projects.map((project) => <Project {...project} />)
      }
    </div>
  );
}

export default Projects;
