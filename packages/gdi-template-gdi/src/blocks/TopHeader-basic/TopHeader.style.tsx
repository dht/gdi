import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    background-size: cover;
    background-color: black;
    position: relative;
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
    z-index: 9;
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
