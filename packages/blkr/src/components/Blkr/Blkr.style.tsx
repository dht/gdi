import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #334;
`;

export const Content = styled.div`
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    right: 200px;
    bottom: 100px;
`;

export const SideBarWrapper = styled.div`
    width: 200px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const BarWrapper = styled.div`
    height: 100px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
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
    top: 2vh;
    left: 2vw;
    filter: sepia(0.6) hue-rotate(20deg);
`;

export const PriceTagWrapper = styled.div`
    position: absolute;
    top: 2vh;
    right: 10vw;
`;

export const CtaWrapper = styled.div`
    position: absolute;
    bottom: 5vh;
    right: 5vw;
    filter: sepia(0.6) hue-rotate(20deg);
`;

export const Item = styled.div<{ width: number; height: number }>`
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => props.width}px;
    height: ${(props) => props.width}px;
    transition: transform 0.1s linear;

    &.left {
        transform: translateX(${(props) => -1 * props.width}px);
    }

    &.right {
        transform: translateX(${(props) => props.width}px);
    }

    &.top {
        transform: translateY(${(props) => -props.height}px);
    }

    &.bottom {
        transform: translateY(${(props) => props.height}px);
    }

    &.center {
        transform: translateX(0) translateY(0);
    }

    &.queue1,
    &.queue2 {
        pointer-events: none;
        display: none;
    }

    &.recycled {
        opacity: 0;
        pointer-events: none;
        transition: none;
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px 0 10px;
`;
