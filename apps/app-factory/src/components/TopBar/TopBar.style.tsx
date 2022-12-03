import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px;
    justify-content: flex-start;
`;

export const ToolsWrapper = styled.div``;

export const ToggleView = styled.div`
    margin: 0 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const H1 = styled.h1`
    ${(props) => props.theme.marginRight('40px')}
    user-select: none;
`;

export const MindTheGap = styled.div`
    width: 10px;
`;
