import styled from 'styled-components';

export const StyledDefaultContainer = styled.div`
    display: grid;
    width: 80%;
    height: calc(100vh - 84px);
    grid-column-gap: 40px;
    margin: 40px 0 0 10%;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 80px 1fr 80px;
    grid-template-areas: "head head head"
                        "main main sidebar"
                        "footer footer footer";
`;