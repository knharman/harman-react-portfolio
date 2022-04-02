import './resume.css';
import {Link} from 'react-router-dom';
import resume from './resume.pdf';

function Resume() {
  return (
    <div className="Resume">
      <Link to={resume} target="_blank" download>Download</Link>
    </div>
  );
}

export default Resume;