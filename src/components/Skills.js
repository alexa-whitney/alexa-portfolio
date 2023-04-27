import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";
import colorSharp from "../assets/images/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <p>
                <ul>
                  <li><b>Languages:</b> JavaScript, Ruby, Python, HTML, CSS, SQL</li>
                  <li><b>Frameworks/Libraries:</b> React, Ruby on Rails, Bootstrap</li>
                  <li><b>Tools:</b> Git, GitHub, VSCode, Postman</li>
                  <li><b>Databases:</b> MySQL, MongoDB</li>
                </ul>
              </p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Object-Oriented Programming</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Database Management</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Version Control</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
