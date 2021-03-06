import './resume.css';
import { Link } from 'react-router-dom';
import resume from './resume.pdf';
import venus from '../../images/gifs/venus.gif';
import fire from '../../images/gifs/fire.gif';
import { CopyBlock, shadesOfPurple } from "react-code-blocks";

function Resume() {
  return (
    <div className="Resume">
      <div style={{ maxWidth: "300px", margin: "auto" }} className="window">
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
              <button onClick={() => {
                window.open(resume)
              }}>Open</button>
          </div>
        </div>
      </div>
      <img className="venus" src={venus} alt="venus fly trap gif" />
      <img className="fire" src={fire} alt="arrow with flames gif" />
      <div className="code-block">
        <CopyBlock
          className="code-block"
          text={`
      # Skills Include: 
        - Front End
          - HTML, CSS, JavaScript
          - React
          - Bootstrap
          - AJAX
        - Back End
          - Express.js
          - Node
          - NoSQL and MongoDB
          - MySQL
          - Security and Auth
          - GraphQL
        - Other Stuff
          - Git
          - Project Management and Collaboration
          - Design Patterns
          - PWAs and SPAs
          - Algorithms and Data Structures 
      `}
          showLineNumbers={false}
          theme={shadesOfPurple}
          language="html"
          wrapLines
        />
      </div>

    </div>
  );
}

export default Resume;