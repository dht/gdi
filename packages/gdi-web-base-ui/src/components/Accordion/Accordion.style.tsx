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

export const Chevron = styled.div`
    width: 18px;
    height: 18px;
    transform: rotate(0deg) translateX(0) translateY(0);

    &.open {
        transform: rotate(90deg) translateX(3px) translateY(3px);
    }

    &.rtl {
        transform: rotate(180deg) translateX(0) translateY(0);

        &.open {
            transform: rotate(90deg) translateX(-3px) translateY(3px);
        }
    }
`;

export const Title = styled.div`
    flex: 1;
    font-size: 18px;
    ${(props) => props.theme.marginLeft('7px')};
`;

export const Content = styled.div<{ flex?: boolean }>`
    flex: 1 1 auto;
    overflow-y: auto;
    height: 0;
    display: ${(props) => (props.flex ? 'flex' : 'block')};
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 150px;
    zoom: 0.8;
`;
