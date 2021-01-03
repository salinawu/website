import React from 'react';
import styled from 'styled-components';

import NavigationBar from '../../components/NavigationBar';
import MobileNavigationBar from '../../components/NavigationBar/mobile';

// TODO add footer 
const UnstyledLayout = ({ className, children, isMobile }) => {
    return (
        <div className={className}>
            {isMobile ? <MobileNavigationBar /> : <NavigationBar />}
            <div className="children">{children}</div>
        </div>

    );
}

const Layout = styled(UnstyledLayout)`
    display: flex;
    flex-direction: ${({ isMobile }) => isMobile ? 'column' : 'row'};
    font-family: Gotu;


    .children {
        margin-left: ${({ isMobile }) => isMobile ? '8%' : '12%'};
        margin-right: ${({ isMobile }) => isMobile ? '8%' : '12%'};

        padding-top: ${({ isMobile }) => isMobile ? '80px' : '124px'};
        padding-left: ${({ isMobile }) => isMobile ? '0' : '200px'};
        padding-right: ${({ isMobile }) => isMobile ? '0' : '60'};
        // margin-left: ${({ isMobile }) => isMobile ? '0' : '8%'};

        #highlight {
            background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(230,230,250,1) 40%, rgba(230,230,250,1) 100%); 
        }

        // css styles for links
        a {
            text-decoration: underline;
            text-underline-offset: 4px;
            background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,230,238,1) 40%, rgba(255,230,238,1) 100%);
        }

        a:hover {
            font-weight: bold;
        }
    }

    a {
        text-decoration: none;
        color: #000;
    }

    .header {
        font-size: 32px;
    }

    .body {
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 16px;

        display: flex;
        flex-direction: column;
        div {
            padding-bottom: 20px;
        }
    }
`;

export default Layout;
  