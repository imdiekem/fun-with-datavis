import React from 'react';

import { StyledMain } from './styled-components';

const Main = (props) => {
    return (
        <StyledMain>{props.children}</StyledMain>
    );
}

export default Main;