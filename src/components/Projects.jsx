import ProjectBox from "./ProjectShowBox";
import prehab from "../images/Thesis-app-web.webp"
import jamva from "../images/JamvaCropped.webp"

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>Past Projects</p>
            <h3>Every development project is distinct and carries its own unique characteristics.</h3>
            <div className="projects-grid">
              <ProjectBox 
                title="TCC Prehab"
                img={prehab}
                des="A mobile app made for an upcoming trial at St Vincent's Hospital.
                The app allows users to complete prehabilitation at home and send the appropriate data to their clinician's web app."
                tech1="React"
                tech2="TypeScript"
                demo="https://drive.google.com/file/d/1i2iDpUj1D_xftgUIWVbDZoWT7Z3HB8SM/view?usp=sharing"
                flip={false}
              />
              <ProjectBox 
                title="World Pandemic Monitor"
                img={jamva}
                des="A gamified educational website for users to learn about the 
                latest diseases and outbreaks. One of the main features include a
                 interactive 3D globe to explore outbreaks around the world."
                tech1="Python"
                tech2="Javascript"
                demo="https://jamva.vercel.app/"
                code="https://github.com/haunteringj/SENG3011_Jamva"
                flip={true}
              />
            </div>
          </div> 
          <h2 className="new-projects">More projects to be made public soon...</h2>
        </div>
      </section>
    </>
  );
}

export default Projects;
