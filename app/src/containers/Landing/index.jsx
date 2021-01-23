import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { fetchText } from '../../services';
const functionsRequest = "http://localhost:5001/personal-website-f24ac/us-central1/app";

const UnstyledLanding = ({ className }) => {
    const [resumeUrl, setResumeUrl] = useState("");

    useEffect(() => {
        fetchText('/resume')
            .then(url => {
                setResumeUrl(url);
            });
    }, []);

    return (
        <div className={className}>
            <div className="header">👋🏼 Hi, I'm Salina!</div>
            <div className="body">
                <div>
                    Professional Machine Learning Infrastructure engineer (currently at 
                    <a target="_blank" rel="noreferrer" href="https://www.gotinder.com/jobs"> Tinder</a>),
                    experienced fullstack web engineer,
                    amateur surfer, and <Link to="/ceramics">ceramics enthusiast</Link>. 
                </div>
                <div className="projects-link">
                        Take a look at my projects at my <Link to="/projects">projects page</Link>, 
                        or download my <a target="_blank" rel="noreferrer" href={resumeUrl}>resume</a>.
                </div>
            </div>
        </div>
    );

};

const Landing = styled(UnstyledLanding)`
`;

export default Landing;
  