import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UnstyledLanding = ({ className }) => (
    <div className={className}>
        <div className="header">👋🏼 Hi, I'm Salina!</div>
        <div className="description">
            Professional Machine Learning Infrastructure engineer (currently at 
            <a target="_blank" href="https://www.gotinder.com/jobs"> Tinder</a>),
            experienced fullstack web engineer,
            amateur surfer, and <Link to="/ceramics">ceramics enthusiast</Link>. 
        </div>
        <div className="projects-link">
            Take a look at my projects <Link to="/projects"> here</Link>, 
            or download my resume HERE.
            {/* TODO add resume download */}
        </div>
    </div>
);

const Landing = styled(UnstyledLanding)`
    .header {
        font-size: 32px;
    }

    .description {
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 16px;
    }
`;

export default Landing;
  