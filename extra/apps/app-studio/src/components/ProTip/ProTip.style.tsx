import styled from 'styled-components';
import { device, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;

    ${device(
        '1080p',
        css`
            zoom: 0.75;
        `
    )}
`;

export const Box = styled.div`
    background-color: #223;
    border-radius: 35px;
    padding: 26px;
`;

export const Top = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Time = styled.div`
    color: gold;
`;

export const Category = styled.div`
    color: pink;
`;

export const Title = styled.div`
    color: white;
    font-size: 28px;
    margin-bottom: 10px;
`;

export const Paragraph = styled.div`
    color: #aaa;
    font-size: 13px;
    line-height: 1.35;
    margin-bottom: 15px;
`;

export const OtherOptions = styled.div`
    opacity: 0.4;
    text-decoration: underline;
    ${(props) => props.theme.marginLeft('40px')}
`;

export const Video = styled.div`
    width: 260px;
    height: 150px;
`;

export const A = styled.button`
    color: cyan;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 12px;
    margin-top: 5px;
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

export const Youtube = styled.iframe`
    border: none;
`;

export const Reason = styled.div`
    font-size: 20px;
    line-height: 1.4;
`;
