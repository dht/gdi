import styled from 'styled-components';
import { device, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    font-size: 15px;
    width: 0;
    background-color: rgba(255, 255, 255, 0.9);

    &.dark {
        background-color: rgba(0, 0, 0, 0.9);
    }

    max-height: 60vh;
    min-width: 27.5vw;

    ${device(
        '1080p',
        css`
            max-height: 78vh;
            min-width: 35.5vw;
            zoom: 0.75;
        `
    )}
`;

export const Close = styled.div`
    width: 40px;
    height: 40px;
    background-color: #223;
    position: absolute;
    top: -15px;
    right: -15px;
    border-radius: 50%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid #889;

    &:hover {
        background-color: #556;
    }
`;
