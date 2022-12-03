import styled from 'styled-components';

export const Wrapper = styled.div<{ isDayTime: boolean }>`
    flex: 1;
    /* background-image: ${(props) =>
        `url(https://appofthebox.web.app/${
            props.isDayTime ? 'day' : 'evening'
        }.jpg)`}; */
    background-size: cover;
    padding: 240px 40px 0;
    color: ${(props) => (props.isDayTime ? '#334' : '#eef')};
`;

export const Table = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    position: relative;
    flex: 1;
`;

export const Placeholder = styled.div`
    width: 120px;
`;

export const HeaderContainer = styled.div<{ color: string; width?: number }>`
    background-color: ${(props) => props.color};
    font-size: 14px;
    font-family: monospace;
    border-radius: 10px 10px 0 10px;
    border: 1px solid #333;
    position: relative;
    width: ${(props) => (props.width ? props.width + 'px' : '100px')};
`;

export const Hour = styled.div`
    width: 140px;
    height: 52px;
    color: #333;
    position: relative;

    &:nth-child(2n) {
        background-color: rgba(0, 0, 0, 0.12);
    }
`;

export const HourTitle = styled.div`
    height: 52px;
    width: 140px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #667;
`;

export const Break = styled.div<{ color: string }>`
    height: 52px;
    background-color: ${(props) => props.color};
    top: -1px;
    ${(props) => props.theme.left('100%')}
    position: absolute;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 300;
    color: #667;
    box-shadow: inset 1px 0 3px 0 rgba(0, 0, 0, 0.3),
        1px 0 3px 0 rgba(255, 255, 255, 0.3);
`;

export const Empty = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    background-color: #334;
    border-radius: 30px 30px 0 30px;
    box-shadow: inset 0 0 10px 3px rgba(255, 255, 255, 0.1);
    font-size: 34px;
    font-weight: 100;
    color: #dde;
    align-items: center;
    justify-content: center;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
`;
