import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/images/header-img.svg";

export const Banner = () => {
  // Number of times word has been looped through
  const [loopNum, setLoopNum] = useState(0);
  // Boolean to determine if word is being deleted
  const [isDeleting, setIsDeleting] = useState(false);
  // List of words to rotate through
  const toRotate = ["web developer", "software engineer", "programmer"];
  // Current word being processed
  const [text, setText] = useState("");
  // Amount of time between transition of each word
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // Amount of time to wait before deleting word
  const period = 2000;

  // useEffect to run tick function
  useEffect(() => {
    // Set timeout to run tick function
    let ticker = setInterval(() => {
      // Run tick function
      tick();
      // Set delta to random number
    }, delta)

    // Return function to clear interval
    return () => { clearInterval(ticker) };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  // Function to rotate through words
  const tick = () => {
    // Get current index of word
    let i = loopNum % toRotate.length;
    // Get full text of current word
    let fullText = toRotate[i];
    // Check if word is being deleted
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    // Update text
    setText(updatedText);

    // Update delta
    if (isDeleting) {
      // If deleting, set delta to be faster
      setDelta(prevDelta => prevDelta /2)
    }

    // If word is complete
    if (!isDeleting && updatedText === fullText) {
      // Set delta to wait period before deleting
      setIsDeleting(true);
      setDelta(period);
      // If word is being deleted
    } else if (isDeleting && updatedText === "") {
      // Set delta to wait period before next word
      setIsDeleting(false);
      // Increment loopNum
      setLoopNum(loopNum + 1);
      // Set delta to be faster
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Alexa `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              I'm a passionate and curious software developer with a background
              in criminal justice, now embracing the exciting world of
              technology. With a keen eye for both front-end and back-end
              development, I'm always eager to explore new challenges and expand
              my skillset.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
