import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
`;

export const Item = styled.div`
    height: 50px;
    padding: 10px 20px;
    line-height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    &:nth-child(2n + 1) {
        background-color: rgba(255, 255, 255, 0.04);
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);

        .ok-icon {
            opacity: 0.2;
        }
    }

    &.selected {
        .ok-icon {
            opacity: 1;
            color: gold;
        }
    }

    user-select: none;
`;

export const ContainerIcon = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    background-color: #000;
    ${(props) => props.theme.marginRight('15px')}
    border-radius: 15px;
    opacity: 0;
`;
