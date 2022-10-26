import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 10px 15px;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    position: relative;
    overflow: hidden;

    &::after {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
    }
`;

export const Inner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
`;

export const Time = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 40px;
    margin-top: 5px;
`;
export const Hours = styled.div``;
export const Minutes = styled.div``;
export const Divider = styled.div``;

export const City = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
    text-align: center;
`;

const Button = styled.a`
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
    cursor: pointer;
    color: white;

    i {
        font-size: 18px;
    }

    &:hover {
        color: palevioletred;
    }

    &:active {
        transform: translateY(-1px) translateX(-1px);
    }
`;

export const Radio = styled(Button)`
    position: absolute;
    bottom: 5px;
    right: 8px;
    margin-left: 5px;
    z-index: 2;
`;

export const Clear = styled(Button)`
    position: absolute;
    bottom: 5px;
    left: 8px;
    margin-right: 5px;
    z-index: 2;
`;
