import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    background-image: linear-gradient(
        180deg,
        #00000066 0%,
        #222233ff 20%,
        #222233ff 90%,
        #00000067 100%
    );
    position: relative;
    flex-direction: column;
    min-height: 100vh;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Bk = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
`;

export const Fg = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
`;

export const Column = styled.div`
    flex: 1;
    display: flex;

    &:nth-child(1) {
        max-width: 700px;
        margin: 0 30px;
    }

    &:nth-child(2) {
        margin: 4px;
    }
`;
