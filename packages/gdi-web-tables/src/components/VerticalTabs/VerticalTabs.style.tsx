import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    border-bottom: 1px solid #556;
    max-width: 300px;
    overflow: auto;
`;

export const Tab = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #556;
    cursor: pointer;

    &:hover {
        background-color: rgba(255, 255, 255, 0.05);
    }

    &.selected {
        background-color: rgba(255, 255, 255, 0.03);
        color: gold;
    }
`;

export const Color = styled.div`
    width: 3px;
    height: 50px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    ${(props) => props.theme.paddingLeft('10px')}
`;

export const Title = styled.div`
    font-size: 16px;
`;

export const Subtitle = styled.div`
    font-size: 14px;
    opacity: 0.4;
`;
