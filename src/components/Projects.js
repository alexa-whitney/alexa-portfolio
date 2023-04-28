import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import quitter from "../assets/images/quitter.png";
import bookshelf from "../assets/images/bookshelf.png";
import catchoftheday from "../assets/images/catchoftheday.png";
import schittyapi from "../assets/images/schittyapi.png";
import colorSharp2 from "../assets/images/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Quitter",
      description: "A social media app for people who want to quit smoking.",
      imgUrl: quitter,
      category: "Python",
    },
    {
      title: "The Beguiling Bookshelf",
      description:
        "A book recommendation website with books from my very own library.",
      imgUrl: bookshelf,
      category: "React",
    },
    {
      title: "Catch of the Day",
      description: "An e-commerce site for a seafood market.",
      imgUrl: catchoftheday,
      category: "React",
    },
    {
      title: "Schitty API",
      description: "A delightful and easy-to-use RESTful API that serves up random quotes and character information from the beloved TV show Schitt's Creek, bringing a touch of wit and humor to your applications.",
      imgUrl: schittyapi,
      category: "API",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
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
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">React</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Python</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">API</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects
                      .filter((project) => project.category === "React")
                      .map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects
                      .filter((project) => project.category === "Python")
                      .map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Row>
                    {projects
                      .filter((project) => project.category === "API")
                      .map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
