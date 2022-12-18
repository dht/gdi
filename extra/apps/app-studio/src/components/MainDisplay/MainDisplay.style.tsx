import styled from 'styled-components';
import { device, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    background-color: #223;

    ${device(
        '1080p',
        css`
            zoom: 0.75;
        `
    )}
`;

export const ContextLine = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 5px 10px;
    height: 28px;
    color: rgba(255, 255, 255, 0.8);
`;

export const Domain = styled.div``;

export const SignalLine = styled.div`
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding: 3px 10px 5px;
    height: 22px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: space-between;
`;

export const Percent = styled.div``;

export const Listening = styled.div`
    background-color: yellowgreen;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    box-shadow: 0 0 6px rgba(247, 255, 11, 0.617);
    margin: 2px;
    animation-name: blink;
    animation-duration: 2200ms;
    animation-iteration-count: infinite;

    @keyframes blink {
        0% {
            opacity: 0;
        }
        30% {
            opacity: 1;
        }
        70% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;

export const Ear = styled.div`
    flex: 1;
    padding: 0 15px;
    font-size: 28px;
    line-height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const Actions = styled.div`
    width: 150px;
    right: -150px;
    position: absolute;
    top: 28px;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const Action = styled.button`
    animation: flyInFromLeft 0.6s ease-out;
    animation-fill-mode: forwards;
    box-shadow: inset 10px 0 5px 2px rgba(0,0,0,0.2);
    transform: translateX(-100%);

    &:nth-child(1) {
        animation-delay: 1.1s;
    }
    
    &:nth-child(2) {
        animation-delay: 1.2s;
    }

    @keyframes flyInFromLeft {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(-10px);
        }
    }

    font-size: 20px;
    padding: 8px 0 8px 20px;
    border: 2px solid #334;
    min-width: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    &.primary {
        background-color: gold;
    }

    &:active {
        position: relative;
        top: 1px;
        left: 1px;
    }

    &:nth-child(1) {
        border-radius: 12px 12px 0 0;
    }

    &:nth-child(2) {
        border-radius: 0 0 12px 12px;
    }

    &:hover {
        &&:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 5px;
            background-color: rgba(255, 255, 255, 0.2);
        }
    }

    i {
        margin-right: 5px;
    }

    &:nth-child(1) {
        padding: 12px 0 12px 20px;
        position:relative;
        top:2px;
`;
