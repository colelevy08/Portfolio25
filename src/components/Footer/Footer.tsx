import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
/*import instagramIcon from '../../assets/instagram.svg'*/

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://colelevy08.github.io/Portfolio25/" className="logo">
        <span>Cole Levy's Portfolio </span>
      </a>
      <div className="social-media">
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
        {/* <a
          href="https://www.instagram.com/colevy/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a> */}
      </div>
    </Container>
  )
}
