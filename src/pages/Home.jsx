import "../assets/styles/home.css";
import developer from "../assets/images/undraw_hello_re_3evm.svg";

const Home = () => {
  return (
    <section>
      <section>
        <section className="intro">
          <section className="sect">
            <section className="mid">
              <section className="content">
                <div>
                  <h1 className="int">
                    Bridging tech and Engineering solutions for meaningful
                    change
                  </h1>
                </div>
                <div>
                  <h3 className="ara">
                    I am Adebola, a Software Engineer crafting precise tech
                    solutions and an Mechatronics Engineer passionate about
                    innovating in the engineering world. Join me on my journey
                    as I bridge programming and engineering to create meaningful
                    impact.
                  </h3>
                </div>
              </section>
              <div>
                <img className="side" src={developer} alt="Hello" />
              </div>
            </section>
          </section>
        </section>
        <div className="more">
          <h1 className="mid">My Skills</h1>
          <h2>Languages</h2>
          <ul>
            <li>JavaScript</li>
            <li>React.js</li>
          </ul>
          <h2>Frameworks</h2>
          <ul>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
          </ul>
          <h2>Hosting Platforms</h2>
          <ul>
            <li>Vercel</li>
            <li>Netlify</li>
            <li>GitHub</li>
          </ul>
          <h2>Version Control</h2>
          <ul>
            <li>GitHub</li>
            <li>GitLab</li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Home;
