import '../assets/styles/resume.css'
import resume from '../assets/ADEBOLA RIDWAN.PDF'
import { FileArrowDown } from "@phosphor-icons/react";
const Resume = () => {
  return (
    <section>
      <div className="resume">
        <h2 className="text">
          Click The Button To View And Download My Resume
        </h2>
        <a href={resume} target="_blank" rel="noopener noreferer">
          <button className="baka">
            Resume <FileArrowDown size={24} />
          </button>
        </a>
      </div>
    </section>
  );
}

export default Resume