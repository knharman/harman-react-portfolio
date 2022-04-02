import Project from '../project/project';
import './projects.css';
import itineraryScreenshot from '../../images/pdxitinerary.png';
import afkscreenshot from '../../images/afk.png'


function Projects() {
  const projects = [
    {
      title: "Your Portland Itinerary",
      liveLink: "https://josephjamescoop.github.io/your-portland-itinerary/",
      githubLink: "https://github.com/JosephJamesCoop/your-portland-itinerary",
      screenshot: itineraryScreenshot
    },
    {
      title: "Allergy Free Kitchen",
      liveLink: "https://afk-network.herokuapp.com/",
      githubLink: "https://github.com/JosephJamesCoop/the-allergy-free-kitchen",
      screenshot: afkscreenshot
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
        projects.map((project) => <Project {...project} key={project.title} />)
      }
    </div>
  );
}

export default Projects;
