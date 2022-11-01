import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    user-select: none;
`;

export const Options = styled.div`
    background-color: #d8d8d8;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 36px;
    border-radius: 20px;
    overflow: hidden;

    @media (max-width: 768px) {
        height: 50px;
        border-radius: 20px;
    }
`;

export const Option = styled.div<{ selected: boolean }>`
    flex: 1;
    text-align: center;
    font-size: 18px;
    color: #333;
    height: 36px;
    line-height: 36px;
    ${(props) => props.theme.borderRight('1px solid #333')}
    transition: all 50ms ease-in-out;
    touch-action: manipulation;
    background-color: ${(props) =>
        props.selected ? '#F19943' : 'transparent'};

    @media (max-width: 768px) {
        height: 50px;
        line-height: 50px;
        font-size: 24px;
    }
`;
