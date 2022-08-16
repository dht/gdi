import styled from 'styled-components';

export const Container = styled.div`
    margin: 50px auto;
`;

export const ContainerNewItem = styled.div<{ selected?: boolean }>`
    background-color: #445;
    margin: 0 0 13px;
    height: 120px;
    border: 1px solid #556;
    line-height: 50px;
    padding: 10px 15px 10px 20px;
    box-sizing: border-box;
    user-select: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px solid transparent;
        border-color: ${(props) => (props.selected ? 'gold' : 'transparent')};
        outline: none;
    }
`;

export const Title = styled.div`
    color: #eee;
    font-size: 30px;
    text-align: center;
    flex: 1;
`;
