// import AboutImg from "../images/about-img.webp";
// import RoundedText from "../images/text2.svg";
// import WorkingEmoji from "../images/working-emoji.png";

function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              {/* <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" /> */}
              <span>
                {/* <img src={RoundedText} alt="text" /> */}
              </span>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                Software Engineer <br /> based in Sydney, Australia
              </h4>
              <p>
                Hey, my name is Marko, and I'm a Software Engineer. My passion
                is to create and develop full stack application for my users.
                <br />
                <br />
                My main stack currently is React/Next.js in combination with
                CSS and TypeScript.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
