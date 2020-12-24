import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Menu from '../Menu';

const UnstyledNavigationBar = ({ className }) => (
    <div className={className}>
        <Link to='/' className="name-title">salina wu</Link>
        <Menu />
    </div>
);

const NavigationBar = styled(UnstyledNavigationBar)`
    padding: 60px;
    position: fixed;
    .name-title {
        font-size: 24px;
    }
`;

export default NavigationBar;
  