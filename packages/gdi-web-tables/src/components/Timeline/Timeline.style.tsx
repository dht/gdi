import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    position: relative;
`;

export const Scroll = styled.div`
    overflow-x: auto;
    max-width: 100vw;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
`;
export const Expander = styled.div`
    height: 5px;
    width: 5000px;
`;

export const Svg = styled.svg``;

export const Polygon = styled.polygon<{ negative?: boolean }>`
    fill: ${(props) => (props.negative ? 'url(#negative)' : 'url(#positive)')};
    stroke-linejoin: round;
    stroke-width: 3;
    stroke: #000;
    paint-order: fill;

    &:hover {
        stroke: gold;
        stroke-opacity: 0.5;
        fill: ${(props) =>
            props.negative ? 'url(#negativeHover)' : 'url(#positiveHover)'};
    }
`;

export const Line = styled.polygon`
    fill: #eee;
`;

export const Text = styled.text`
    fill: white;
    color: #a52a2a;
`;
