import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Top = styled.div`
    height: 25vh;
    position: relative;
    display: flex;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    .fg {
        background-image: linear-gradient(
            0deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.9) 10%,
            rgba(0, 0, 0, 0) 100%
        );
    }
`;

export const Details = styled.div`
    position: absolute;
    bottom: -50px;
    ${(props) => props.theme.left('50px')}
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Me = styled.div`
    ${(props) => props.theme.marginLeft('40px')}
    margin-bottom: 15px;
`;

export const Content = styled.div`
    flex: 1;
    padding: 150px 0;
    display: flex;
    flex-direction: row;
`;

export const Column = styled.div`
    flex: 1;

    &:first-child {
        max-width: 200px;
    }
`;

export const Name = styled.div`
    font-size: 40px;
    margin-bottom: 10px;
    font-weight: 300;
`;

export const Email = styled.div`
    font-size: 20px;
    font-weight: 200;
    color: gold;
`;

export const Users = styled.div`
    background-color: rgba(0, 0, 0, 0.1);
    display: table;
    width: 800px;
`;

export const UserRow = styled.div`
    display: table-row;
    background-color: rgba(0, 0, 0, 0.1);
`;

export const UserField = styled.div<{ color?: string }>`
    display: table-cell;
    padding: 5px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    vertical-align: middle;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: ${(props) => props.color ?? '#ccd'};
`;

export const SettingsWrapper = styled.div`
    position: absolute;
    ${(props) => props.theme.left('500px')}
    top: 18px;
`;
