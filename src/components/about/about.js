import './about.css';
import photo from '../../images/kbyc.jpg';
import roses from '../../images/gifs/flowers.gif';

function About() {
  return (
    <div className="About">
      <div className="row">
        <div className="col-md">
          <p>Blurb</p>
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