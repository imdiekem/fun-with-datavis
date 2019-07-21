import styled from 'styled-components';

export const StyledSidebar = styled.aside`
    grid-area: sidebar;
    font-size: 1.2em;
    padding: 10px 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill,minMax(30px, 1fr));
`;