import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 10px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const Inner = styled.div`
    flex: 1;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    align-items: center;
`;

export const Sync = styled.div`
    position: absolute;
    top: 55px;
    ${(props) => props.theme.right('20px')}

    i {
        cursor: pointer;
        position: relative;
        color: #778;

        &:hover {
            color: gold;
        }

        &:active {
            bottom: 1px;
            ${(props) => props.theme.left('1px')}
        }
    }
`;

export const EstimateWrapper = styled.div`
    position: absolute;
    bottom: 42px;
    ${(props) => props.theme.right('10px')}
`;
