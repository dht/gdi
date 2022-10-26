import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 40px;
    position: relative;
`;

export const RowHeaderContainer = styled.div<{ selected: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    height: 40px;
    width: 130px;
    transform-origin: 0 0;
    transform: rotate(-90deg) translateX(-132px) translateY(-40px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-left: 2px solid #333;
    font-size: 20px;
    color: ${(props) => (props.selected ? 'gold' : '#667')};
    cursor: pointer;

    &:hover {
        background-color: #334;
    }
`;
