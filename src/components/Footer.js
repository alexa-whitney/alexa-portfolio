import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/images/logo.png";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/alexawhitney/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/alexa-whitney"><img src={navIcon2} alt="Icon"/></a>
            </div>
            <p>© 2023 Alexa Whitney</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
