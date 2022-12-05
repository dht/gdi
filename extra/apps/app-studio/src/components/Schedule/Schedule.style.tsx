import styled from 'styled-components';
import { device, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 20px 34px;
    color: #fff;
    overflow: hidden;
    animation-delay: 2.9s;

    ${device(
        '1080p',
        css`
            padding: 12px 24px;
            zoom: 0.83;
        `
    )}
`;

export const Item = styled.div<{ highlighted: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    line-height: 1.5;
    color: ${(props) => (props.highlighted ? '#333' : '#445')};
    font-weight: ${(props) => (props.highlighted ? 'bold' : 'normal')};
`;

export const Time = styled.div`
    width: 60px;
`;

export const Title = styled.div`
    max-width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;
