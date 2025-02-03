

const About = () => {
  return (
    <section className="intro">
      <div className="about">
        <h1 className="ab">About Me</h1>
        <section className="sec1">
          <div className="cont1">
            <div className="bio">
              <h3 className="int">
                I am a self-motivated Mechatronics Engineer and Web Developer
                with over a decade of teaching experience. Passionate about
                integrating engineering principles with coding to develop
                innovative solutions, I thrive on working across multiple
                projects and mentorship programs, driving impact in both
                technology and engineering.
              </h3>
            </div>
            <div className="image">
              <img
                className="img"
                src="../images/undraw_developer_activity_re_39tg.svg"
                alt="dev guy"
              />
            </div>
          </div>
        </section>
        <h1 className="ab">Key Qualifications</h1>
        <section className="sec3">
          <div className="bio3">
            <div>
              <img
                className="img2"
                src="../images/undraw_web_developer_re_h7ie.svg"
                alt=""
              />
            </div>
            <div>
              <h1 className="web">Web Development Expertis</h1>
              <h3>
                Proficient in various web development languages, frameworks, and
                tools, with a track record of delivering high-quality projects.
              </h3>
            </div>
          </div>
        </section>
        <section className="sec4">
          <div className="bio4">
            <div className="cont4">
              <h1 className="ment">Mentorship</h1>
              <h3>
                {" "}
                Experienced in guiding and mentoring individuals, fostering
                growth and development in their web development careers.{" "}
              </h3>
            </div>
            <div className="image4">
              <img
                className="img2"
                src="../images/undraw_engineering_team_a7n2.svg"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="sec5">
          <div className="bio5">
            <div className="image5">
              <img
                className="img2"
                src="../images/undraw_prioritise_re_r5xu.svg"
                alt=""
              />
            </div>
            <div className="cont5">
              <h1 className="dead">Deadline-Oriented</h1>
              <h3>
                Hard-working with a penchant for meeting deadlines,ensuring
                timely completion of projects and tasks.
              </h3>
            </div>
          </div>
        </section>
        <section className="sec6">
          <div className="bio6">
            <div className="cont6">
              <h1 className="pas">Passionate and Dedicated</h1>
              <h3>
                {" "}
                Committed to promoting best practices in web development and
                providing diverse learning opportunities for students and
                clients.
              </h3>
            </div>
            <div className="image6">
              <img
                className="img2"
                src="../images/undraw_certificate_re_yadi.svg"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About