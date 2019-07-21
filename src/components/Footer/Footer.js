import React from 'react';

import { StyledFooter } from './styled-components';

const Footer = (props) => {
    return (
        <StyledFooter>{props.children}</StyledFooter>
    );
}

export default Footer;