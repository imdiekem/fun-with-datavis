import styled from 'styled-components';

export const StyledScatterPlots = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    h2 {
        flex: 0 0 100%;
        text-transform: uppercase;
        letter-spacing: -1px;
        font-family: 'Squada One',cursive;
        font-size: 3rem;
        font-weight: normal;
    }

    div {
        width: calc(50% - 90px);
    }
`;