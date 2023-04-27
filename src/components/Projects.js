import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import quitter from "../assets/images/quitter.png";
import bookshelf from "../assets/images/bookshelf.png";
import catchoftheday from "../assets/images/catchoftheday.png";
import colorSharp2 from "../assets/images/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Quitter",
      description: "A social media app for people who want to quit smoking.",
      imgUrl: quitter,
    },
    {
      title: "The Beguiling Bookshelf",
      description:
        "A book recommendation website with books from my very own library.",
      imgUrl: bookshelf,
    },
    {
      title: "Catch of the Day",
      description: "An e-commerce site for a seafood market.",
      imgUrl: catchoftheday,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Welcome to the projects section of my portfolio page! Here you'll
              find a showcase of my skills and projects. I've created three
              projects that demonstrate my ability to create both back-end and
              front-end solutions: Quitter, a social media app for people who
              want to quit smoking; The Beguiling Bookshelf, a book
              recommendation website; and Catch of the Day, an e-commerce
              website. I've used a variety of technologies including Python,
              Flask, WTForms, SQLAlchemy, and React to create these projects.
              Take a look around and feel free to contact me if you have any
              questions!
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Quitter</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">The Beguiling Bookshelf</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Catch of the Day</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>

                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
