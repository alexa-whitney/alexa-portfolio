import { Container, Row, Col } from "react-bootstrap";
import quitter from "../assets/images/quitter.png";
import bookshelf from "../assets/images/bookshelf.png";
import catchoftheday from "../assets/images/catchoftheday.png";

export const Projects = () => {

  const projects = [
    {
      title: "Quitter",
      description: "A social media app for people who want to quit smoking.",
      imgUrl: {quitter},
    },
    {
      title: "The Beguiling Bookshelf",
      description: "A book recommendation website with books from my very own library.",
      imgUrl: {bookshelf},
    },
    {
      title: "Catch of the Day",
      description: "An e-commerce site for a seafood market.",
      imgUrl: {catchoftheday},
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
          </Col>
        </Row>
      </Container>
    </section>
  )
};
