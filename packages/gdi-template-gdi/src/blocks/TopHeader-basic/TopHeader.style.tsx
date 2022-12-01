import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    background-size: cover;
    background-color: black;
    position: relative;
    overflow-x: hidden;
`;

export const Wrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.img`
    max-width: 130px;
    position: absolute;
    left: 100px;
    top: 8px;
    z-index: 999;
`;

export const Text = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 16px;
    text-transform: uppercase;
    font-variation-settings: 'wdth' 75, 'wght' 750;
`;

export const DateText = styled.div``;

export const Separator = styled.div`
    margin: 0 10px;
`;

export const Message = styled.div``;

export const Svg = styled.svg`
    width: 100vw;
    position: relative;
    top: 5px;
`;

export const Polygon = styled.polygon`
    fill: white;
`;

export const Flex = styled.div`
    flex: 1;
`;

export const Github = styled.a`
    opacity: 0.9;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        opacity: 1;
    }

    &:active {
        position: relative;
        top: 1px;
        left: 1px;
    }
`;
