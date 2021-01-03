import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UnstyledAbout = ({ className }) => (
    <div className={className}>
        <div className="header">🏄🏻‍♀️ About Me</div>
        <div className="body">
            <div>Welcome to my little slice of the digital sphere!</div>

            <div>
                My name is Salina and I'm a software engineer currently focusing on <span id="highlight">Machine Learning (ML) Infrastructure</span>. 
                I have been on the ML Infrastructure team at Tinder for two years, where I do a mix of <span id="highlight">fullstack and data engineering work</span>.
                Some of my projects on this team have included building an ML <span id="highlight">feature catalog and store</span>, creating an ML <span id="highlight">model registry using MLFlow</span>,
                and building a <span id="highlight">monitoring and alerting platform</span> for ML services and data. 
            </div>

            <div>
                Prior to working in the ML space, I was on the <span id="highlight">Tinder Web team</span> for two years. During that time, I worked
                primarily on the <a target="_blank" rel="noreferrer" href="https://tinder.com/">Tinder progressive web app</a>, building client-facing 
                features such as support for <a target="_blank" rel="noreferrer" href="https://blog.gotinder.com/orientations/">sexual orientations</a>,
                <a target="_blank" rel="noreferrer" href="https://techcrunch.com/2019/01/16/tinder-is-testing-the-ability-to-share-spotify-music-clips-in-chat/">sending Spotify songs</a> to matches,
                new user signup flows, and more. 
                In addition to working on the web app, I built <a target="_blank" rel="noreferrer" href="https://swipelife.tinder.com/">Swipelife</a>, our lifestyle blog, and
                gave a talk about building this site using GatsbyJS at the <span id="highlight">Lesbians Who Tech conference</span> in 2019. 
            </div>

            <div>
                To learn more about the projects I've worked on or am working on, please visit
                my <Link to="/projects">projects page</Link>.
            </div>

            <div>
                I grew up on Long Island, NY, though I don't have the accent to prove it. I went to school at the University of Chicago,
                where I got degrees in Computer Science and Music, as well as a minor in Statistics. 
                Nowadays, I am based out of Los Angeles, CA, where I can enjoy the beautiful weather and even more beautiful oceans year-round. 
            </div>
            
            <div>
                Outside of engineering, I have a wide range of interests. I love to surf, and recently spent a month working out of Hawaii for an extended, focused practice.
                I've also spent many years making pottery; you can see some of my work <Link to="/ceramics">here</Link>.
                These days, I have been getting into food projects, gravitating towards longer-term projects such as bread-baking 
                and kimchi-making. Another passion of mine is music; I've played the violin, French horn, and piano at various points of my life and am currently a violinist in a community orchestra. 
            </div>
        </div>
    </div>
);

const About = styled(UnstyledAbout)`
`;

export default About;
