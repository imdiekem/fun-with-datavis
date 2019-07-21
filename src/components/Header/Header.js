import React from 'react';

import { StyledHeader } from './styled-components';

const Header = (props) => {
    return (
        <StyledHeader>{props.children}</StyledHeader>
    );
}

export default Header;