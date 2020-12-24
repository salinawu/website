import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';


const UnstyledMenu = ({ className }) => (
    <div className={className}>
        <ul>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/ceramics">Ceramics</Link>
            {/* <Link to="/musings">Musings</Link> */}
            <Link to="/contact">Contact</Link>
        </ul>
    </div>
);

const Menu = styled(UnstyledMenu)`
    ul {
        display: flex;
        flex-direction: column;
        padding: 0;
        margin-top: 24px;
    }

    a {
        text-decoration: none;
        color: #000;
        font-size: 16px;
        padding-bottom: 8px;
    }
`;

export default Menu;
  