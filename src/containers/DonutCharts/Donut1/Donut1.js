import React, { useState, useEffect } from 'react';

import { VictoryPie, VictoryLabel } from 'victory';

import { StyledChartContainer } from '../styled-components';

const startingPie = [
    {x: "primary", y: 99, fill: "#47e8be", hoverFill: "#47e8be", eventKey: "primary"},
    {x: "secondary", y: 1, fill: "#1cb38c", hoverFill: "#1cb38c", eventKey: "secondary"}
]

const Donut1 = () => {
    const [pieData, updatePie] = useState([]);

   useEffect(()=> {
        updatePie(startingPie);
    },[startingPie]);

    const innerRadius = (1 / 3) * 250;

    // this part chart uses the label component as the central text
    // victory generates a label component for each pie piece and in this case we only want the text to render once
    // so this closure handles returning a string only once, regardless of # of pie pieces
    const getLabelText = () => {
        var count = 0;
        return function() {
            count++;
            return count === 1 ? ['Love', 'for', 'Pie'] : null;
        }
	}

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
                    labelComponent={
                        <VictoryLabel
                            name="pielabel"
                            data={pieData[0]}
                            textAnchor="middle"
                            verticalAnchor="middle"
                            x={200 / 2}
                            y={96}
                            text={getLabelText()}
                            width={200 - innerRadius}
                            eventKey="primary"
                            style={{
                                width: '80%',
                                fontSize: 20,
                                fontWeight: 'normal',
                                textTransform: 'uppercase',
                                fill: '#9c9e9d'
                            }}
                        />
                    }
                />
            </svg>
        </StyledChartContainer>
    );
}

export default Donut1;