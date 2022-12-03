import styled from 'styled-components';

export const Wrapper = styled.a`
    color: var(--main-color);
    font-weight: 500;
    text-decoration: none;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-variation-settings: 'wdth' 100, 'wght' 580;
    font-family: ${(props) => props.theme.fontFamily};
    margin: 15px 0;

    i {
        margin-right: 5px;
    }
`;
