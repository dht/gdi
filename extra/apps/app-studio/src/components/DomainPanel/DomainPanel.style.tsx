import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
`;

export const ContextLine = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 5px 10px;
    height: 18px;
    color: rgba(255, 255, 255, 0.5);
`;

export const Domain = styled.div``;

export const SignalLine = styled.div`
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding: 3px 10px 5px;
    height: 12px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
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
