import React, { useState, useEffect } from 'react';
import Legend from '../../Legend';

import { VictoryPie } from 'victory';

import {
    StyledChartContainer,
    StyledLegendContainer,
    StyledPieChartWidthLegendContainer
} from '../styled-components';

const startingPie = [
    {x: "primary", y: 85, fill: "#f35583", hoverFill: "#f35583", eventKey: "primary"},
    {x: "secondary", y: 15, fill: "#47e7be", hoverFill: "#47e7be", eventKey: "secondary"}
]

const Donut1 = () => {
    const [pieData, updatePie] = useState([
        {
            x: 'primary',
            y: 0,
            fill: '#47e7be',
            hoverFill: '#1cb38c',
            eventKey: 'primary'
        },
        {
            x: 'secondary',
            y: 100,
            fill: '#47e7be',
            hoverFill: '#1cb38c',
            eventKey: 'secondary'
        }
    ]);

   useEffect(()=> {
        updatePie(startingPie);
    },[startingPie]);

    const innerRadius = (1 / 3) * 250;

    return (
        <StyledPieChartWidthLegendContainer
            width="335px"
            margin={0}
        >
            <StyledChartContainer
                width="200px"
                margin={0}
            >
                <svg viewBox="0 0 200 200">
                    <VictoryPie
                        name="pie"
                        data={pieData}
                        standalone={false}
                        width={200}
                        height={200}
                        labels={[]}
                        innerRadius={innerRadius}
                        style={{ data: { fill: (d) => d.fill } }}
                        padding={0}
                        animate={{
                            duration: 1500,
                            onLoad: { duration: 1500 },
                            easing: "backInOut"
                        }}
                    />
                </svg>
                <section>
                    <div>Love</div>
                    <div>For</div>
                    <div>Pie</div>
                </section>
            </StyledChartContainer>
            <StyledLegendContainer>
                <Legend />
            </StyledLegendContainer>
        </StyledPieChartWidthLegendContainer>
    );
}

export default Donut1;