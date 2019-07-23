import styled from 'styled-components';

export const StyledNavBar = styled.nav`
    width: 100%;
    z-index: 2000;
    padding: 32px 20px;
    font-size: 1.3em;
    text-transform: uppercase;
    display: grid;
    grid-template-columns: repeat(auto-fit, minMax(100px, 1fr));
    align-content: center;
    justify-items: center;

    @media only screen and (min-width: 600px) {
        width: 70%;
        margin-left: 15%;
    }

    a:hover {
        color: #47e8be;
        transition: all 0.25s;
    }
`