import styled from 'styled-components';

export const StyledNavItemsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    width: 50%;

    a {
        text-transform: uppercase;
        text-decoration: none;
        font-size: 0.8rem;
        color: #5c4949;

        :hover {
            color: #47e8be;
        }
    }
`;