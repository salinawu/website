import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UnstyledPageNotFound = ({ className }) => (
    <div className={className}>
        <div className="header">😬 Oops!</div>
        <div className="body">
            Sorry, seems like that page doesn't exist. Here's the way back <Link to='/'>home</Link>...
        </div>
    </div>
);

const PageNotFound = styled(UnstyledPageNotFound)`
    .header {
        font-size: 32px;
    }

    .description {
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 16px;
    }
`;

export default PageNotFound;
  