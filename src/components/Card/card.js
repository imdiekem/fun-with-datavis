import React from 'react';

import { StyledCard } from './styled-components';

const card = (props) => {
    return (
        <StyledCard>
            {props.children}
        </StyledCard>
    )
};

export default card;