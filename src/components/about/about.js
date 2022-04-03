import './about.css';
import photo from '../../images/kbyc.jpg'

function About() {
  return (
    <div className="About">
      <div className="row">
        <div className="col">
          <p>Blurb</p>
        </div>
        <div className="col">
          <img src={photo} alt="Me" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default About;