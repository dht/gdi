import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    position: absolute;
    width: 700px;
    height: 500px;
    background-repeat: no-repeat;
    left: 10px;
    bottom: -60px;
    background-image: url(/street-sign-3.png);
    background-size: contain; ;
`;

export const Sign1 = styled.div`
    height: 50px;
    position: absolute;
    top: 63px;
    left: 80px;
    font-weight: 600;
    transform: perspective(300px) rotateX(20deg) rotateY(11deg);
`;

export const Sign2 = styled.div`
    height: 50px;
    position: absolute;
    top: 265px;
    left: 35px;
    font-weight: 600;
    transform: perspective(600px) rotateX(-10deg) rotateY(9deg);
`;

export const Sign3 = styled.div`
    height: 50px;
    position: absolute;
    top: 158px;
    left: 370px;
    font-weight: 600;
    transform: perspective(600px) rotateX(-10deg) rotateY(16deg);
`;

export const Text = styled.div`
    display: flex;
    flex: 1;
    margin: 5px;
    border-radius: 5px;
    display: flex;
    flex: 1;
    font-size: 40px;
    color: #334;
    font-family: 'Bitter';
    font-variation-settings: 'wdth' 100, 'wght' 600;
`;

export const Slogan = styled.div``;

export const Inner = styled.div``;
