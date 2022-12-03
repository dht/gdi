import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 5px;
`;

export const Title = styled.div``;

export const Icon = styled.img`
    /* filter: invert(1); */

    &.green {
        filter: invert(0.5) sepia(1) saturate(2) hue-rotate(-260deg);
    }

    &.purple {
        filter: invert(0.5) sepia(1) saturate(5) hue-rotate(-150deg);
    }

    &.pink {
        filter: invert(0.5) sepia(1) saturate(5) hue-rotate(-50deg);
    }

    &.gold {
        filter: invert(0.5) sepia(1) saturate(5) hue-rotate(15deg);
    }

    &.white {
        filter: invert(1);
    }

    &.blue {
        filter: invert(0.5) sepia(1) saturate(5) hue-rotate(175deg);
    }
`;
