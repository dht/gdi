import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 15px;
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    user-select: none;

    &:hover {
        background-color: rgba(255, 255, 255, 0.05);
    }
`;

export const Chevron = styled.div<{ open: boolean }>`
    width: 18px;
    height: 18px;
    transform: rotate(${(props) => (props.open ? '90deg' : '0deg')})
        translateX(${(props) => (props.open ? '3px' : '0')})
        translateY(${(props) => (props.open ? '3px' : '0')});
`;

export const Title = styled.div`
    flex: 1;
    font-size: 18px;
    margin-left: 7px;
`;

export const Content = styled.div<{ flex?: boolean }>`
    flex: 1 1 auto;
    overflow-y: auto;
    height: 0;
    display: ${(props) => (props.flex ? 'flex' : 'block')};
`;
