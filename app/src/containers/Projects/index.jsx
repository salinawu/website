import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { fetchText } from '../../services';
import Project from '../../components/Project';
import projectData from '../../assets/data/projects.json';

//TODO fill out this page
const UnstyledProjects = ({ className }) => {
    const [resumeUrl, setResumeUrl] = useState("");

    useEffect(() => {
        const resumeUrl = fetchText('/resume');
        resumeUrl.then(val => setResumeUrl(val));
    }, []);

    return (
        <div className={className}>
            <div className="header">🛠👩🏻‍💻 Projects</div>
            <div className="body">
                <div className="description">
                    Here are some of the projects I've accomplished that I feel most proud of. 
                    If you want to know more about any project in detail, feel free to <Link to="/contact">reach out</Link>!
                    For a more holistic view of my work, have a look at my <a target="_blank" rel="noreferrer" href={resumeUrl}>resume</a>.
                </div>
                {projectData.map(p => (
                    <Project key={p.name} {...p} />
                ))}
            </div>
        </div>
    );
};

const Projects = styled(UnstyledProjects)`
`;

export default Projects;
  