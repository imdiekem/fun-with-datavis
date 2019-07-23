import React, { useState, useEffect } from 'react';

import { VictoryPie } from 'victory';

import { StyledChartContainer } from '../styled-components';

const startingPie = [
    {x: "primary", y: 85, fill: "#47e8be", hoverFill: "#47e8be", eventKey: "primary"},
    {x: "secondary", y: 15, fill: "#40c5a3", hoverFill: "#40c5a3", eventKey: "secondary"}
]

const Donut1 = () => {
    const [pieData, updatePie] = useState([
        {
            x: 'primary',
            y: 0,
            fill: '#40c5a3',
            hoverFill: '#1cb38c',
            eventKey: 'primary'
        },
        {
            x: 'secondary',
            y: 100,
            fill: '#40c5a3',
            hoverFill: '#1cb38c',
            eventKey: 'secondary'
        }
    ]);

   useEffect(()=> {
        updatePie(startingPie);
    },[startingPie]);

    const innerRadius = (1 / 3) * 250;

    return (
        <StyledChartContainer
            width="200px"
            margin="0"
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
                        duration: 2000,
                        onLoad: { duration: 2000 },
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
    );
}

export default Donut1;