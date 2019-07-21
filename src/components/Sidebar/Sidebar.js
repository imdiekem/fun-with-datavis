import React from 'react';

import { StyledSidebar } from './styled-components';

const Sidebar = (props) => {
    return (
        <StyledSidebar>{props.children}</StyledSidebar>
    );
}

export default Sidebar;