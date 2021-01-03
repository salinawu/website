import React from 'react';
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';
import Menu from '../Menu';

const UnstyledNavigationBar = ({ className, isMobile }) => {
    const location = useLocation();

    return (
        <div className={className}>
            <Link to='/' className="name-title">salina wu</Link>
            <Menu route={location.pathname}/>
        </div>
    );
};

const NavigationBar = styled(UnstyledNavigationBar)`
    padding: 60px;
    position: fixed;
    .name-title {
        font-size: 24px;
        overflow: hidden;
    }

    .name-title:hover {
        text-shadow: .05em .05em 0 rgba(255,192,203,1);
    }

`;

export default NavigationBar;
  