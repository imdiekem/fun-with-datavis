import React from 'react';

import { StyledDefaultContainer } from './styled-components';

const DefaultContainer = (props) => {
    return (
        <StyledDefaultContainer>
            {props.children}
        </StyledDefaultContainer>
    );
};

export default DefaultContainer;