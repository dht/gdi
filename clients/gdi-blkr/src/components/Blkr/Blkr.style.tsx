import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;

    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    flex: 1;
`;

export const BarWrapper = styled.div`
    height: 100px;
`;

export const InfoWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;

    transform: translate(-50%, -50%);
    display: none;
`;

export const GuidanceWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;

    transform: translate(-50%, -50%);
    display: none;
`;

export const BadgeWrapper = styled.div`
    position: absolute;
    top: 5vh;
    left: 5vw;
    filter: sepia(0.6) hue-rotate(20deg);
`;

export const PriceTagWrapper = styled.div`
    position: absolute;
    top: 5vh;
    right: 5vw;
`;

export const CtaWrapper = styled.div`
    position: absolute;
    bottom: 5vh;
    right: 5vw;
    filter: sepia(0.6) hue-rotate(20deg);
`;

export const Item = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(100vh - 100px);
`;
