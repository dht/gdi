import styled from 'styled-components';

export const Container = styled.div<{ selected: boolean }>`
    flex: 1;
    margin-bottom: 10px;
    position: relative;
    border: 2px solid transparent;
    border-color: ${(props) => (props.selected ? 'gold' : 'transparent')};

    &:hover {
        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: rgba(255, 255, 255, 0.1);
            box-shadow: inset 0 0 5px 10px rgba(0, 0, 0, 0.2);
        }
    }

    &.selected {
    }
`;
