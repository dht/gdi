import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    background-image: url(/top.png);
    background-size: cover;

    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.img`
    max-width: 700px;
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
