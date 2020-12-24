import React from 'react';
import styled from 'styled-components';

import NavigationBar from '../../components/NavigationBar';

const UnstyledLayout = ({ className, children }) => {
    return (
        <div className={className}>
            <NavigationBar />
            <div className="children">{children}</div>
        </div>

    );
}

const Layout = styled(UnstyledLayout)`
    display: flex;
    font-family: Gotu;
    margin-left: 12%;
    margin-right: 12%;

    .children {
        padding-top: 124px;
        padding-left: 240px;
        padding-right: 60px;
        margin-left: 8%;
    }

    a {
        text-decoration: none;
        color: #000;
    }
`;

export default Layout;
  