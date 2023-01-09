import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 1000px;
    height: 700px;
    display: flex;
    overflow: visible;
    position: relative;
    background-image: radial-gradient(
        circle at center,
        #f3d7b7 0,
        rgba(235, 206, 178, 0.8) 30%,
        rgba(0, 0, 0, 0) 60%
    );

    > canvas {
        flex: 1;
        display: flex;
    }
`;

export const HudWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    pointer-events: none;
`;
