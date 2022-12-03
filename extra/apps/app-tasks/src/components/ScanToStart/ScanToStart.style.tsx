import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 1;
    position: relative;

    .icon {
        font-size: 60px;
    }
`;

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.div`
    margin-bottom: 20px;
    font-size: 22px;
    opacity: 0.7;
`;

export const Sync = styled.div`
    position: absolute;
    top: 10px;
    ${(props) => props.theme.right('10px')}

    i {
        cursor: pointer;
        position: relative;

        &:hover {
            color: gold;
        }

        &:active {
            bottom: 1px;
            ${(props) => props.theme.left('1px')}
        }
    }
`;
