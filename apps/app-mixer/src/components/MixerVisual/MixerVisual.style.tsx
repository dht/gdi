import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 50px auto;
`;

export const ContainerNewItem = styled.div<{ selected?: boolean }>`
    background-color: #445;
    margin: 0 0 13px;
    height: 120px;
    border: 1px solid #556;
    line-height: 50px;
    ${(props) => props.theme.padding('10px 15px 10px 20px')}

    user-select: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        ${(props) => props.theme.left(0)}
        ${(props) => props.theme.right(0)}
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
