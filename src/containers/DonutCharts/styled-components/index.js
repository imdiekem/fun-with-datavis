import styled from 'styled-components';

export const StyledChartContainer = styled.div`
    width: ${props => props.width};
    margin: ${props => props.margin};
    grid-area: pie;
    display: grid;

    svg, section {
        grid-column: 1;
        grid-row: 1;
    }
    
    section {
        align-self: top;
        justify-self: center;
        font-size: 18px;
        text-transform: uppercase;
        color: #929e9b;
        display: grid;
        align-content: center;
        justify-items: center;
    }
`;

export const StyledLegendContainer = styled.div`
    display: grid;
    grid-area: legend;
    align-items: center;
    color: #7b8583;

    .legend-title {
        margin-bottom: 10px;
    }
`;

export const StyledPieChartWidthLegendContainer = styled.div`
    width: ${props => props.width};
    margin: ${props => props.margin};
    display: grid;
    grid-gap: 0;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "pie legend";
`;