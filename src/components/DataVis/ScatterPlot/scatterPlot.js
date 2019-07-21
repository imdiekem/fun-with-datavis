import React from 'react';
import { VictoryScatter } from 'victory';

import { StyledScatterContainer } from './styled-components';

const scatterPlot = () => {
    return (
        <StyledScatterContainer>
            <VictoryScatter />
        </StyledScatterContainer>
    )
};

export default scatterPlot;