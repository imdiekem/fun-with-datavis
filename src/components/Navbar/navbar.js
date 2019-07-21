import React from 'react';

import { StyledNavBar } from './styled-components';

const navBar = (props) => {
    return (
        <StyledNavBar>
            {props.children}
        </StyledNavBar>
    );
}

export default navBar;