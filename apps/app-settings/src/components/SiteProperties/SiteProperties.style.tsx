import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    min-height: calc(100vh - 20px);
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 30px;
`;

export const H1 = styled.h1`
    flex: 1;
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    > button {
        margin: 0 5px;
    }
`;

export const Error = styled.div`
    ${(props) => props.theme.marginRight('50px')}
    color: red;
    font-size: 15px;
`;

export const Editors = styled.div`
    display: flex;
    flex-direction: row;

    > div {
        position: relative;
        &:nth-child(1) {
            flex: 3;
        }

        &:nth-child(2) {
            flex: 2;
            filter: grayscale();

            &::before {
                content: 'All Possible Properties';
                background-color: green;
                position: absolute;
                top: -15px;
                ${(props) => props.theme.left('50%')}
                width: 160px;
                text-align: center;
                padding: 6px 10px;
                transform: translateX(-50%);
                border-radius: 10px;
                z-index: 999;
            }
        }
    }
`;
