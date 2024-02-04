import AboutImg from "../images/stockImage.webp";

function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                Software Engineer <br /> based in Sydney, Australia
              </h4>
              <p>
                Hello, my name is Marko, and I'm a Software Engineer. I finished 
                all my software engineering courses on Feburary 2024 at University of New South Wales (UNSW).
                <br />
                <br />
                My passion is to create and develop software solutions for my users. 
                I had worked on numerous projects in the past and with different clients.
                One such client was St Vincent Hospital which involved the creation of a mobile app. 
                <br />
                <br />
                The recent stacks I had worked on includes: Javascript, React, HTML, CSS, Python, Firebase and much more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
