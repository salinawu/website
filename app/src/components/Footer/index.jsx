import React, { useMemo } from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const UnstyledFooter = ({ className }) => {
    const currentYear = useMemo(() => new Date().getFullYear(), []);

	return (
        <div className={className}>
            <div className="social">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/salinawu/">LinkedIn</a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/salinawuu/">Instagram</a>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className="copyright">© Salina Wu 2020 - {currentYear}</div>
        </div>
    );
};

const Footer = styled(UnstyledFooter)`
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 20px;
    width: 100%;
    padding-top: 24px;
    border-top: solid 1px #d3d3d3;

    .social {
        padding-left: 24px;
    }

    .copyright {
        padding-right: 24px;
    }
    
    a {
        padding-right: 8px;
    }
`;

export default Footer;