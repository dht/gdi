import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    background-color: var(--background-color);
    width: 400px;
`;

export const Header = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    color: #556;
`;

export const Step = styled.div`
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 3px 10px;

    &:nth-child(2n) {
        background-color: rgba(0, 0, 0, 0.3);
    }
`;

export const Icon = styled.div<{ success: boolean; isRunning: boolean }>`
    width: 25px;
    height: 25px;
    border-radius: 15px;
    font-size: 18px;
    text-align: center;
    line-height: 25px;
    ${(props) => {
        switch (props.success) {
            case true:
                return { backgroundColor: 'rgb(50,155,60)' };
            case false:
                return { backgroundColor: 'red' };
            case undefined:
                return { backgroundColor: '#334' };
        }
    }}

    animation-name: ${(props) => (props.isRunning ? 'spin' : 'none')};
    animation-duration: 1500ms;
    animation-iteration-count: infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const Title = styled.div`
    font-size: 16px;
    color: #ccd;
`;

export const Time = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

export const TimeHoursAndMinutes = styled.div`
    color: #555;
    font-size: 14px;
`;

export const TimeSeconds = styled.div`
    color: goldenrod;
    font-size: 16px;
`;

export const Details = styled.div`
    flex: 1;
    ${(props) => props.theme.marginLeft('10px')}
`;

export const Subtitle = styled.div`
    opacity: 0.35;
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Button = styled.button`
    width: 100px;
    height: 50px;
    background-color: #223;
    color: #999;
    border: none;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
    cursor: pointer;

    &:hover {
        background-color: #334;
    }

    &:active {
        position: relative;
        bottom: 1px;
        ${(props) => props.theme.left('1px')}
    }
`;

export const Indexes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    width: 60px;
`;

export const Index = styled.div`
    padding: 2px 5px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    font-size: 11px;
    color: cyan;
    margin: 0 2px;
`;
