import React from 'react';
import styled from 'styled-components';

import Menu from '../../components/Menu';

const UnstyledLayout = ({ className, children }) => {
    return (
        <div className={className}>
            <Menu />
            {children}
        </div>

    );
}

const Layout = styled(UnstyledLayout)`
    display: flex;
`;

export default Layout;
  