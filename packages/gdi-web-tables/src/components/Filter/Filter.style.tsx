import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    margin: 10px 15px;
`;

export const Title = styled.div`
    font-weight: bold;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

export const Items = styled.ul`
    list-style: none;
    padding: 0;
    margin: 10px 0 0;
`;

export const Item = styled.li`
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;

    &.selected {
        color: gold;
        font-weight: bold;
    }
`;

export const A = styled.a`
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

    &.selected {
        color: gold;
        font-weight: bold;
    }
`;

export const X = styled.div`
    position: relative;
    top: 2px;
    ${(props) => props.theme.marginLeft('5px')}
    cursor: pointer;
    color: #aaa;
    font-size: 13px;

    &:hover {
        color: gold;
    }
`;

export const ContainerTags = styled.div`
    flex: 1;
    margin: 10px 15px;

    .AutoComplete-container {
        .rs__control {
            background-color: transparent;
            border: none;
            outline: none;
            border-bottom: 1px solid dodgerblue;
            border-radius: 0;
            box-shadow: none;
        }
    }
`;
