import styled from 'styled-components';
import { device, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-color: #223;
    opacity: 0.96;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 20px;
    border-radius: 7px;

    ${device(
        '1080p',
        css`
            zoom: 0.75;
        `
    )}
`;

export const H1 = styled.h1`
    margin: 0;
    padding: 0;
    font-weight: 200;
    padding-right: 20px;
`;

export const NotificationsContainer = styled.div`
    margin-right: 30px;
    border-right: 1px solid rgba(225, 225, 255, 0.3);
    border-left: 1px solid rgba(225, 225, 255, 0.3);
`;

export const Flex = styled.div`
    flex: 1;
`;
