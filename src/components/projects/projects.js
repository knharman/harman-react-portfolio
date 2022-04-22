import Project from '../project/project';
import './projects.css';
import itineraryScreenshot from '../../images/pdxitinerary.png';
import afkscreenshot from '../../images/afk.png';
import deepthoughts from '../../images/deepthoughts.png';
import readmeGen from '../../images/readmeGen.png';
import budget from '../../images/budget.png';
import scheduler from '../../images/scheduler.png';
import malldirect from '../../images/malldirect.png'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Projects() {
  const projects = [
    {
      title: "MALL DIRECT",
      liveLink: "https://josephjamescoop.github.io/your-portland-itinerary/",
      githubLink: "https://github.com/JosephJamesCoop/your-portland-itinerary",
      screenshot: malldirect
    },
    {
      title: "YOUR PORTLAND ITINERARY",
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
      title: "Professional README Generator",
      liveLink: "https://drive.google.com/file/d/1nrGYZockVRbI1wCgNDWv3Nl7osajK7xS/view",
      githubLink: "https://github.com/knharman/professional-readme-generator",
      screenshot: readmeGen
    },
    {
      title: "Deep Thoughts",
      liveLink: "https://knharman.github.io/deep-thoughts/",
      githubLink: "https://github.com/knharman/deep-thoughts",
      screenshot: deepthoughts
    },
    {
      title: "Budget Tracker",
      liveLink: "https://shrouded-lake-11820.herokuapp.com/",
      githubLink: "https://github.com/knharman/budget-tracker",
      screenshot: budget
    },
    {
      title: "Work Day Scheduler",
      liveLink: "https://knharman.github.io/workday-scheduler/",
      githubLink: "https://github.com/knharman/workday-scheduler",
      screenshot: scheduler
    },
  ]
  return (
    <div className="Projects">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2}}
      >
        <Masonry gutter="80px" columnsCount={2}>
          {
            projects.map((project) => <Project {...project} key={project.title} />)
          }
        </Masonry>

      </ResponsiveMasonry>
    </div>
  );
}

export default Projects;
