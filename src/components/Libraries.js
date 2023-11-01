import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

export const Libraries = () => {
    const npmLibraries = [
        {
            name: "piggytalk",
            description: "A whimsical Node.js module that takes English sentences and playfully converts them into Pig Latin, adding an oink-tastic twist to your conversations!",
            npmLink: "https://www.npmjs.com/package/piggytalk"
        },
        {
            name: "string-o-matic",
            description: "A vibrant toolkit for your text transformations! Whether you're capitalizing, kebob-casing, or hunting for pesky extra spaces, String-o-Matic has got your back. Dive into a textual adventure with the most fun you've ever had with strings.",
            npmLink: "https://www.npmjs.com/package/string-o-matic"
        },
        {
            name: "ticktalk",
            description: "TickTalk.js isn't just another date library – it's your trusty sidekick in the ever-ticking world of JavaScript dates. Consider it a rendezvous between clarity and functionality, making your date operations more intuitive and less... date-ing (pun absolutely intended).",
            npmLink: "https://www.npmjs.com/package/ticktalk"
        },
        {
            name: "funkymotions",
            description: "Welcome to **FunkyMotions**! Unleash the power of groovy animations and let your elements dance, jive, and have the time of their lives!",
            npmLink: "https://www.npmjs.com/package/funkymotions"
        },
        
    ];

    return (
        <section id="libraries" className="libraries-section">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>NPM Libraries</h2>

                        <div className="npm-intro">
                            <p>
                            NPM (Node Package Manager) is a package manager for the JavaScript runtime environment Node.js. Libraries in NPM are reusable pieces of code packaged up to be shared and used by other developers. These libraries can range from simple utility functions to complex frameworks. The NPM libraries listed below are ones I've created myself and proudly shared with the global developer community on npmjs.com. By both utilizing and contributing to NPM libraries in my projects, I'm able to leverage the work of the wider developer community. This ensures I use well-tested and optimized code, allowing me to focus on building unique features rather than reinventing the wheel.
                            </p>
                        </div>

                        {npmLibraries.map((library, index) => (
                            <div key={index}>
                                <h3><a href={library.npmLink} target="_blank" rel="noopener noreferrer">{library.name}</a></h3>
                                <p>{library.description}</p>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
