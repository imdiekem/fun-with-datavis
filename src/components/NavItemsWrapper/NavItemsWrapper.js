import React from 'react';
import { StyledNavItemsWrapper } from './styled-components';

const navItemsWrapper = (props) => {
    return (
        <StyledNavItemsWrapper>
            {props.children}
        </StyledNavItemsWrapper>
    )
};

export default navItemsWrapper;