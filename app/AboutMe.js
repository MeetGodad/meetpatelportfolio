
export default function AboutMe() {
    return (
      <section className="about" id="about">
      <div className="row">
        <h2>About Me</h2>
        <div className="about__content">
          <div className="about__text">
            <p>
            I am a Software Developer based in Calgary, Alberta. I have a passion for creating and building Web & Mobile applications that are user-friendly and accessible. I have experience working with various technologies and languages such as JavaScript, React, Node.js, and more . I am always eager to learn new things and improve my skills.
            </p>
            <a href="#" className="btn">My Resume</a>
            <a href="mailto:meethasmukhbhai.patel@edu.sait.ca" className="btn">Contact Me</a>
          </div>

          <div className="about__photo-container">
            <img className="about__photo" src="/images/Profile pic.jpg" alt="Profile Pic " />
          </div>
        </div>
      </div>
    </section>
      );
    }