import './about.css';
import photo from '../../images/kbyc.jpg'

function About() {
  return (
    <div className="About">
      <p>Blurb</p>
      <img src={photo} alt="Photo of me" />
    </div>
  );
}

export default About;