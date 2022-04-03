import './about.css';
import photo from '../../images/kbyc.jpg';
import roses from '../../images/gifs/flowers.gif';

function About() {
  return (
    <div className="About">
      <div className="row">
        <div className="col-md">
          <p>Kellie Harman is a Portland-based full stack web developer with a passion for making accessible and functional applications that are easy to use.</p>
          <p>After recently completing a bootcamp at University of Oregon, Kellie is thrilled to begin her full stack career. She is eagerly anticipating the opportunity utilize her coding skills, integrate her previous leadership experience, and let her curiosity steer her toward personal projects.</p>
          <p>When she's not working and learning, Kellie can be found tending to her plants and hanging with her Puggle. 
          </p>
        </div>
        <div className="col-md">
          <img src={photo} alt="Me" className="img-fluid" />
          <img className="roses" src={roses} alt="roses gif" />
        </div>
      </div>
    </div>
  );
}

export default About;