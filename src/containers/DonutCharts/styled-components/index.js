import styled from 'styled-components';

export const StyledChartContainer = styled.div`
    width: ${props => props.width};
    margin: ${props => props.margin};
    display: grid;

    svg, section {
        grid-column: 1;
        grid-row: 1;
    }
    
    section {
        padding-top: 60px;
        align-self: top;
        justify-self: center;
        font-size: 18px;
        text-transform: uppercase;
        color: #929e9b;

        div {
            text-align: center;
        }
    }
`;