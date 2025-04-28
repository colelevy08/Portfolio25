import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import { Fade, Slide } from "react-awesome-reveal";
import colelevypicture from "../../assets/colelevypicture.png";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import telegram from "../../assets/telegram.svg";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <Fade triggerOnce>
          <Slide direction="left" triggerOnce>
            <p>
              <img src={Hello} alt="Hello" width="20px" /> Hello, my name is
            </p>
          </Slide>
        </Fade>
        <Fade triggerOnce delay={200}>
          <Slide direction="left" triggerOnce delay={200}>
            <h1>Cole Levy</h1>
          </Slide>
        </Fade>
        <Fade triggerOnce delay={400}>
          <Slide direction="left" triggerOnce delay={400}>
            <h3>Full Stack Developer</h3>
          </Slide>
        </Fade>
        <Fade triggerOnce delay={600}>
          <Slide direction="left" triggerOnce delay={600}>
            <p className="small-resume" style={{ margin: "5px 0" }}>
              Bachelor of Arts - Communication and Media
            </p>
            <p className="small-resume" style={{ margin: "5px 0" }}>
              Full Stack Development 15 week course - Flatiron School
            </p>
            <p className="small-resume" style={{ margin: "5px 0", display: "flex", alignItems: "center" }}>
              CompTIA A+ Certified
              <a
              href="https://www.credly.com/badges/42dcfd6d-fe00-422c-a891-780fb40feaa5/public_url"
              target="_blank"
              rel="noreferrer"
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                backgroundColor: "#0073e6",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
                fontSize: "0.9em",
              }}
              >
              View Certification
              </a>
            </p>
          </Slide>
        </Fade>

        <Fade triggerOnce delay={800}>
          <Slide direction="left" triggerOnce delay={800}>
            <div style={{ margin: "25px 0" }}>
              <BrowserRouter>
                <NavHashLink
                  smooth
                  to="#contact"
                  className="button"
                  style={{ fontSize: "1.2em" }}
                >
                  Contact
                </NavHashLink>
              </BrowserRouter>
            </div>
          </Slide>
        </Fade>
        <Fade triggerOnce delay={1000}>
          <Slide direction="left" triggerOnce delay={1000}>
            <div className="social-media" style={{ margin: "-50px 0" }}>
              <a
                href="https://www.linkedin.com/in/colelevy"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a
                href="https://github.com/colelevy08/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=15184104999&text=Hello+Cole"
                target="_blank"
                rel="noreferrer"
              >
                <img src={whatsapp} alt="Whatsapp" />
              </a>
              <a
                href="https://t.me/colelevy"
                target="_blank"
                rel="noreferrer"
              >
                <img src={telegram} alt="telegram" />
              </a>
            </div>
          </Slide>
        </Fade>
      </div>
      <div className="hero-image">
        <Fade triggerOnce>
          <Slide direction="right" triggerOnce>
            <img
              src={colelevypicture}
              alt="colelevypicture"
              style={{
                width: "150%",
                height: "auto",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            />
          </Slide>
        </Fade>
      </div>
    </Container>
  );
}