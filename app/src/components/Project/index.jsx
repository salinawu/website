import React from 'react';
import styled from 'styled-components';

const UnstyledProject = ({
    className,
    company,
    highlights,
    name,
    overview,
    team,
    justifyDirection
}) => {

    return (
        <div className={className}>
            <h3>{name}</h3>
            <h5>{company} - {team}</h5>
            <div className="overview">{overview}</div>
            <ul className="highlights">
                {highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                ))}
            </ul>
        </div>
    );
};

const Project = styled(UnstyledProject)`
    li {
        font-size: 14px;
    }

    .overview {
        font-style: italic;
        font-size: 14px;
    }
`;

export default Project;
  