import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(/noise.png);
    background-size: cover;
    background-position: center;
    position: relative;
`;

export const H1 = styled.h1`
    font-family: 'Bitter';
    font-size: 70px;
    padding: 0;
    margin: 0 0 50px;
`;

export const P = styled.div`
    font-size: 40px;
    font-variation-settings: 'wdth' 100, 'wght' 200;
    margin-bottom: 100px;

    span {
        border-bottom: 2px solid yellowgreen;
    }
`;

export const StreetSignWrapper = styled.div`
    position: absolute;
    bottom: 5vh;
    left: 0;
    border: 1px solid green;
`;
