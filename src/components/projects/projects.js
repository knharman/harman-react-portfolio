import Project from '../project/project';
import './projects.css';
import itineraryScreenshot from '../../images/pdxitinerary.png';
import afkscreenshot from '../../images/afk.png'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

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
    }, 
    {
      title: "Allergy Free Kitchen",
      liveLink: "https://afk-network.herokuapp.com/",
      githubLink: "https://github.com/JosephJamesCoop/the-allergy-free-kitchen",
      screenshot: afkscreenshot
    },
    {
      title: "Allergy Free Kitchen",
      liveLink: "https://afk-network.herokuapp.com/",
      githubLink: "https://github.com/JosephJamesCoop/the-allergy-free-kitchen",
      screenshot: afkscreenshot
    },
  ]
  return (
    <div className="Projects">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2}}
      >
        <Masonry gutter="80px" columnsCount="2">
          {
            projects.map((project) => <Project {...project} key={project.title} />)
          }
        </Masonry>

      </ResponsiveMasonry>
    </div>
  );
}

export default Projects;
