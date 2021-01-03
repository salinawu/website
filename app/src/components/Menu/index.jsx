import React, { useMemo } from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const ABOUT = "ABOUT";
const CERAMICS = "CERAMICS";
const CONTACT = "CONTACT";
const PROJECTS = "PROJECTS";
// const MUSINGS = "MUSINGS";

const mapRouteToPage = {
    "/about": ABOUT,
    "/ceramics": CERAMICS,
    "/contact": CONTACT,
    "/projects": PROJECTS,
    // "/musings": "MUSINGS"
};

// TODO there's probably a cleaner way to do the links

const UnstyledMenu = ({ className, handleChangeRoute, isMobile, route }) => {
    const activePage = useMemo(() => {
        return mapRouteToPage[route];
    }, [route]);

    return (
        <div className={className}>
            <ul>
                <NavLink
                    activeClassName="active"
                    className="about"
                    isActive={() => activePage === ABOUT}
                    to="/about"
                    onClick={handleChangeRoute}
                >
                    About
                </NavLink>
                <NavLink
                    activeClassName="active"
                    className="projects"
                    isActive={() => activePage === PROJECTS}
                    to="/projects"
                    onClick={handleChangeRoute}
                >
                    Projects
                </NavLink>
                <NavLink
                    activeClassName="active"
                    className="ceramics"
                    isActive={() => activePage === CERAMICS}
                    to="/ceramics"
                    onClick={handleChangeRoute}
                >
                    Ceramics
                </NavLink>
                {/* <NavLink to="/musings">Musings</Link> */}
                <NavLink
                    activeClassName="active"
                    className="contact"
                    isActive={() => activePage === CONTACT}
                    to="/contact"
                    onClick={handleChangeRoute}
                >
                    Contact
                </NavLink>
            </ul>
        </div>
    );
};

const Menu = styled(UnstyledMenu)`
    background-color: ${({ isMobile }) => isMobile ? '#fff' : 'transparent'};
    height: 100%;
    padding-left: ${({ isMobile }) => isMobile ? '8%' : '0'};
    padding-right: ${({ isMobile }) => isMobile ? '8%' : '0'};

    ul {
        display: flex;
        flex-direction: column;
        padding-top: ${({ isMobile }) => isMobile ? '36px' : '24px'};
    }

    a {
        text-decoration: none;
        color: #000;
        font-size: ${({ isMobile }) => isMobile ? '24px' : '16px'};
        padding-bottom: 8px;
    }

    .about, .contact, .ceramics, .projects {
        transition: transform .2s;
    }

    .active {
        transform: translateX(16px);
    }

    .about.active, .about:hover {
        background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(234,253,234,1) 40%, rgba(234,253,234,1) 100%); 
    }

    .contact.active, .contact:hover {
        background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(233,227,244,1) 40%, rgba(233,227,244,1) 100%); 
    }

    .ceramics.active, .ceramics:hover {
        background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(254,245,250,1) 40%, rgba(254,245,250,1) 100%); 
    }

    .projects.active, .projects:hover {
        background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,247,231,1) 40%, rgba(255,247,231,1) 100%); 
    }
`;

export default Menu;
  