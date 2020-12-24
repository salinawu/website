import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UnstyledLanding = ({ className }) => (
    <div className={className}>
        <div className="header">👋🏼 Hi, I'm Salina!</div>
        <div className="description">
            Professional Machine Learning Infrastructure engineer (currently at 
            <Link to="https://www.gotinder.com/jobs"> Tinder</Link>),
            experienced fullstack web engineer,
            amateur surfer, and ceramics enthusiast 
        </div>
    </div>
);

const Landing = styled(UnstyledLanding)`
    padding-top: 64px;

    .header {
        font-size: 32px;
    }

    .description {
        padding-top: 20px;
        font-size: 16px;
    }
`;

export default Landing;
  