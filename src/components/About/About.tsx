import { Container } from "./styles";
import illustration from "../../assets/illustration.png";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import { Fade, Slide } from "react-awesome-reveal";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <Slide triggerOnce direction="left">
          <h2>About me</h2>
        </Slide>
        <Slide triggerOnce direction="left" delay={100}>
          <p>
            I am a Full Stack Developer and Communication graduate with a passion for technology, languages, and global markets. I completed a Full Stack Development program at Flatiron School, where I became proficient in HTML, CSS, JavaScript, React, Python, Flask, SQL, and more. I have continued expanding my expertise since, developing skills in general IT.
          </p>
        </Slide>
        <Slide triggerOnce direction="left" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Before transitioning into tech, I earned my Communication degree from SUNY Geneseo, where I built a strong foundation in media, interpersonal communication, and strategic messaging. I also have a strong interest in spoken languages and am proficient in Spanish, Mandarin, and French, with English as my native language.
          </p>
        </Slide>
        <Slide triggerOnce direction="left" delay={300}>
            <p>
            I currently serve as an Assistant Manager at Sure Thing Hospitality. After contributing to the successful launch of the new Standard Fare restaurant in Saratoga Springs, NY, I now assist in overseeing daily operations and customer service to deliver an exceptional dining experience. This position has further developed my leadership, organizational, and problem-solving abilities.
            </p>
        </Slide>
        <Slide triggerOnce direction="left" delay={400}>
          <h3>Here are my main skills:</h3>
        </Slide>
        <div className="hard-skills">
          <div className="hability">
            <Fade delay={130}>
              <img src={reactIcon} alt="React" />
            </Fade>
          </div>
          <div className="hability">
            <Fade delay={140}>
              <img src={typescriptIcon} alt="Typescript" />
            </Fade>
          </div>
          <div className="hability">
            <Fade delay={160}>
              <img src={nodeIcon} alt="Node" />
            </Fade>
          </div>
          <div className="hability">
            <Fade delay={170}>
              <img src={htmlIcon} alt="Html" />
            </Fade>
          </div>
          <div className="hability">
            <Fade delay={180}>
              <img src={cssIcon} alt="Css" />
            </Fade>
          </div>
          <div className="hability">
            <Fade delay={190}>
              <img src={jsIcon} alt="JavaScript" />
            </Fade>
          </div>
        </div>
      </div>
      <div className="about-image">
        <Slide triggerOnce direction="right" delay={200}>
          <img src={illustration} alt="illustration" style={{ width: '100%', height: 'auto', maxWidth: '500px', margin: '0 auto' }} />
        </Slide>
      </div>
    </Container>
  );
}
