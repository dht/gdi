import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    user-select: none;
`;

export const Row = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    cursor: pointer;

    &:hover {
        background-color: #ffd90011;
    }

    &.selected {
        background-color: #ffd9001f;
    }

    &.faded {
        opacity: 0.3;
    }
`;

export const Key = styled.div`
    width: 100px;
    color: gold;
`;

export const Title = styled.div`
    flex: 1;
`;

export const Percent = styled.div`
    color: goldenrod;
    ${(props) => props.theme.paddingRight('15px')}
`;
