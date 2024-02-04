import "../styles.css";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import StVincentLogo from "../images/StVincentLogo.webp"
import UNSWLogo from "../images/unswLogo.webp"
import JoeySTEAMLogo from "../images/joeySteamLogo.webp"

const skillsIcons = [
  {
    img: "https://skillicons.dev/icons?i=html,css",
    id: 1,
  },
  {
    img: "https://skillicons.dev/icons?i=js,ts",
    id: 2,
  },
  {
    img: "https://skillicons.dev/icons?i=react,next",
    id: 3,
  },
  {
    img: "https://skillicons.dev/icons?i=py,firebase",
    id: 4,
  },
];

const clientlogos = [
  {
    img: StVincentLogo,
    id: 1,
  },
  {
    img: UNSWLogo,
    id: 2,
  },
  {
    img: JoeySTEAMLogo,
    id: 3,
  },
];

function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Software Engineer</h1>
                <p>
                  Hi, I'm Marko Wong. A Software Engineer /
                  Developer based in Sydney, Australia.
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/marko-wong-24271124a/"
                  >
                    <IconBrandLinkedin width={32} height={32} />
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/MarkoWONG"
                  >
                    <IconBrandGithub width={32} height={32} />
                  </a>
                </span>
              </div>

              <div className="hero-img"></div>
            </div>
            <div className="clients">
              <p>Previous Clients</p>
              <div className="logos">
                <ul>
                  {clientlogos.map((icon) => (
                    <li key={icon.id}>
                      <img src={icon.img} alt="client-icons" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.id}>
                      <img src={icon.img} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
