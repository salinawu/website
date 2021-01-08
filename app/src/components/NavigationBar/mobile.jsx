import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';

import MenuIcon from '../../assets/icons/menuIcon';
import CloseIcon from '../../assets/icons/closeIcon';
import Menu from '../Menu';

// TODO smoother animation for padding switch for nav
// TODO prevent scrolling menu https://stackoverflow.com/questions/9280258/prevent-body-scrolling-but-allow-overlay-scrolling

const UnstyledMobileNavigationBar = ({ className, isMobile }) => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    const toggleMenuOpen = useCallback(() => {
        setIsMenuOpen(!isMenuOpen);
    }, [isMenuOpen]);

    const onScroll = useCallback(() => {
        const scrollPosition = window.scrollY;

        if (scrollPosition === 0 || isMenuOpen) {
            setHasScrolled(false);
        } else if (scrollPosition > 0 && !hasScrolled && !isMenuOpen) {
            setHasScrolled(true);
        }

    }, [isMenuOpen]);

    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [onScroll]);


    return (
        <div className={className}>
            <div className={`nav ${hasScrolled ? 'scrolled' : ''}`}>
                <div className="icon" onClick={toggleMenuOpen}>{ isMenuOpen ? <CloseIcon /> : <MenuIcon />}</div>
                <Link to='/' className="name-title">salina wu</Link>
            </div>

            {isMenuOpen && (
                <Menu
                    isMobile
                    handleChangeRoute={toggleMenuOpen}
                    route={location.pathname}
                />
            )}
        </div>
    );
};

const MobileNavigationBar = styled(UnstyledMobileNavigationBar)`
    position: fixed;
    height: 100%;
    width: 100%;

    .nav {
        padding-top: 20px;
        padding-left: 8%;
        padding-right: 8%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;

    }

    .icon {
        height: 30px;
        display: flex;
        align-items: center;
    }

    .name-title {
        font-size: 24px;
        overflow: hidden;
    }

    .scrolled {
        border-bottom: solid 1px #D3D3D3; 
        padding-top: 8px;
    }

`;

export default MobileNavigationBar;
  