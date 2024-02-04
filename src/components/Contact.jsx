import { IconMail, IconMapSearch } from "@tabler/icons-react";

function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              <h3>Want to learn more about me? Get in touch via:</h3>
            </div>
            <div className="contact__icons">
              <div className="contact__icon-box">
                <span>
                  <IconMail width={30} height={30} />
                </span>
                <div className="contact__info">
                  <h3>Mail</h3>
                  <a href="mailto:markowong39@gmail.com">
                      markowong39@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                  <IconMapSearch width={30} height={30} />
                </span>
                <div className="contact__info">
                  <h3>Location</h3>
                  <p>Sydney, Australia</p>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
