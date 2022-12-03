import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    padding: 25px;
`;

export const Tile = styled.div`
    width: 90px;
    height: 90px;
    border: 2px solid #445;
    margin: 5px;
    ${(props) => props.theme.floatLeft()}
    color: #889;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 90px;
    text-align: center;
    cursor: pointer;
    transition: all 100ms ease-out;
    border-radius: 4px;

    &:hover {
        color: palevioletred;
        border-color: palevioletred;
    }
`;
