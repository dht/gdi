import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 850px;
`;

export const Column = styled.div`
    flex: 1;
    padding: 20px;
`;

export const Items = styled.div``;

export const Item = styled.div<{ disabled?: boolean }>`
    margin: 10px 0;
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};
`;

export const Label = styled.div`
    position: relative;
    top: 1px;
    left: 5px;
`;

export const Title = styled.div`
    font-size: 18px;
    margin-bottom: 3px;
`;

export const Subtitle = styled.div`
    color: #778;
`;

export const H2 = styled.h2`
    margin-right: 10px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

export const Action = styled.button`
    background-color: transparent;
    color: pink;
    border: none;
    cursor: pointer;

    &:hover {
        color: #ffaebb;
    }

    &:active {
        color: #ffd2da;
    }
`;

export const Divider = styled.div``;
