import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    ${(props) => props.theme.marginLeft('40px')}
    position: relative;
`;

export const RowHeaderContainer = styled.div<{ selected: boolean }>`
    position: absolute;
    top: 0;
    ${(props) => props.theme.left(0)}
    height: 40px;
    width: 130px;
    transform-origin: 0 0;
    transform: rotate(-90deg) translateX(-132px) translateY(-40px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    ${(props) => props.theme.borderLeft('2px solid #333')}
    font-size: 20px;
    color: ${(props) => (props.selected ? 'gold' : '#667')};
    cursor: pointer;

    &:hover {
        background-color: #334;
    }
`;
