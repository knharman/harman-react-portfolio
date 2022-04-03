import './resume.css';
import { Link } from 'react-router-dom';
import resume from './resume.pdf';

function Resume() {
  return (
    <div className="Resume">
      <div style={{ width: 400, margin: "auto" }} className="window">
        <div className="title-bar">
          <div className="title-bar-text">Resume Downloader</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>

        <div className="window-body">
          <p style={{ textAlign: "center", color: "black" }}>Check out my resume!</p>
          <div className="field-row" style={{ justifyContent: "center" }}>
            <Link to={resume} target="_blank" download>
              <button>Download</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;