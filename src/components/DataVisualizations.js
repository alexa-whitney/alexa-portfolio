import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import behindbars from "../assets/images/behind_bars.png";
import friendships from "../assets/images/friendships_audio_viz.png";
import twelonmusk from "../assets/images/twelon_musk.png";

export const DataVisualizations = () => {
    const visualizations = [
        {
            title: "Twelon Musk: A Twitter Odyssey",
            description: "Elon Musk, whether seen as a visionary genius or an eccentric madman, has undoubtedly blessed the world with his enigmatic presence on Twitter. From unveiling groundbreaking inventions, to sharing cryptic memes, and sometimes making eyebrow-raising statements, Elon's Twitter escapades are a spectacle to behold. Dive deep into 'Twelon Musk', a meticulous data visualization that encapsulates all of Elon's tweets, capturing the time and date of each post, his tweet frequency on any given day, and, of course, the tweet content itself. Explore the mind of one of the most influential tech magnates through the lens of his digital utterances.",
            imgUrl: twelonmusk,
        },
        {
            title: "Behind Bars",
            description: "This project utilizes a comprehensive prison population dataset to create a dynamic and interactive data visualization of the incarcerated population across different states in the United States utilizing circular packing. The visualization includes both the total incarcerated population and the breakdown by race (White, Black, Nonwhite) for each state.",
            imgUrl: behindbars,
        },
        {
            title: "Audio Viz - 'Friendships' by Pascal Letoublon",
            description: "This project uses JavaScript and HTML5 Canvas to analyze the frequency data of the song 'Friendships' by Pascal Letoublon and create a real-time 'static channel equalizer' visualization of the audio.",
            imgUrl: friendships,
        },
    ];

    return (
        <section id="data-visualizations" className="data-visualizations-section">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Data Visualizations</h2>
                    </Col>
                </Row>
                {visualizations.map((viz, index) => (
                    <Row key={index} className="mb-4">
                        <Col md={8} xs={12} className="mx-auto">
                            <div>
                                <h3>{viz.title}</h3>
                                <img src={viz.imgUrl} alt={viz.title} />
                                <p>{viz.description}</p>
                            </div>
                        </Col>
                    </Row>
                ))}
            </Container>
        </section>
    );
}
