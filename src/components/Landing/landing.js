import React from 'react';

import {
    StyledLandingBackground,
    StyledLandingMain
} from './styled-components';

import Card from '../Card';

const landing = () => {
    return (
        <>
            <StyledLandingBackground />
            <StyledLandingMain>
                <div>
                    Welcome to <span>Fun with Data Visulation!</span>
                </div>
            </StyledLandingMain>
        </>
    )
};

export default landing;