import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';


const UnstyledMenu = ({ className }) => (
    <div className={className}>
        <ul>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/ceramics">Ceramics</Link>
            <Link to="/musings">Musings</Link>
            <Link to="/contact">Contact</Link>
        </ul>
    </div>
);

const Menu = styled(UnstyledMenu)`
    ul {
        display: flex;
        flex-direction: column;
    }

    a {
        text-decoration: none;
    }
`;

export default Menu;
  