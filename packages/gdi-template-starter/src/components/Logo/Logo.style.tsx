import styled from 'styled-components';
import { device, css } from '@gdi/engine';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    position: absolute;
    left: 100px;
    top: 10px;

    ${device(
        'tablet',
        css`
            left: 20px;
        `
    )}

    img {
        height: 80px;
    }
`;
