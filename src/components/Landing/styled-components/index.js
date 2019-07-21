import styled from 'styled-components';

export const StyledLandingBackground = styled.div`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50vh 50vw 50vh 50vw;
    border-color: transparent #fbf89c #befbd6 transparent;
    box-sizing: border-box;
    position: fixed;
    z-index: 100;
`;

export const StyledLandingMain = styled.div`
    width: 100%;
    padding: 25vh 0 0 25%;
    position: absolute;
    top: 80px;
    z-index: 200;
    box-sizing: border-box;
    font-size: 25px;
    color: #5c4949;
    text-transform: uppercase;

    span {
        display: block;
        font-size: 80px;
        letter-spacing: -2px;
        font-family: 'Squada One', cursive;
    }
`;