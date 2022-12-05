import styled from 'styled-components';
import { device, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    color: #333;
    border-radius: 0 0 35px 35px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.97);
    box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.2);
    animation-duration: 100ms;
    animation-timing-function: ease-out;

    ${device(
        '1080p',
        css`
            zoom: 0.75;
        `
    )}
`;

export const Rows = styled.div`
    max-height: 300px;
    overflow: auto;

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: transparent;
    }

    &:hover {
        ::-webkit-scrollbar {
            width: 5px;
        }

        ::-webkit-scrollbar-track {
            background: #eee;
        }

        ::-webkit-scrollbar-thumb {
            background: #ccd;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #eef;
        }
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 20px 0 15px;
    cursor: pointer;
    height: 70px;

    &:nth-child(2n-1) {
        background-color: rgba(0, 0, 0, 0.05);
    }

    &:hover {
        .title {
            color: #8f164d;
        }
    }
`;

export const Details = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.3);

    i {
        font-size: 20px;
    }
`;

export const Body = styled.div`
    flex: 1;
`;

export const Title = styled.div`
    font-size: 16px;
    font-variation-settings: 'wdth' 100, 'wght' 550;
    width: 280px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const Description = styled.div`
    color: #889;
    margin-right: 5px;
    white-space: nowrap;
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 40px;
`;

export const Action = styled.div`
    cursor: pointer;
    height: 30px;
    margin-right: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #999;

    &:hover {
        color: palevioletred;
    }

    i {
        font-size: 24px;
    }
`;

export const Brand = styled.img`
    height: 22px;
`;

export const Time = styled.div`
    font-size: 18px;
    font-variation-settings: 'wdth' 100, 'wght' 200;
    color: purple;

    span {
        font-size: 12px;
    }
`;

export const BottomBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 7px 30px 10px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 0 0 35px 35px;
`;

export const A = styled.button`
    background-color: transparent;
    padding: 0;
    border: none;
    color: brown;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid transparent;
    position: relative;

    i {
        margin-right: 3px;
        font-size: 16px;

        &.material-icons {
            font-size: 24px;
        }
    }

    cursor: pointer;

    &:hover {
        span {
            text-decoration: underline;
        }
    }
`;

export const TimeAndActions = styled.div`
    width: 80px;
    text-align: right;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 0;

    .time {
        display: block;
    }

    .actions {
        display: none;
    }

    &:hover {
        .time {
            display: none;
        }

        .actions {
            display: block;
        }
    }
`;
