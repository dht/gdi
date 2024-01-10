import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #223;
`;

export const Th = styled.div`
    font-size: 18px;
    opacity: 0.4;
    height: 40px;
    line-height: 30px;
    box-shadow: inset 1px 1px 1px 2px rgba(0, 0, 0, 0.4);
    padding: 5px;
    text-indent: 5px;
`;

export const ThActions = styled(Th)`
    max-width: 200px;
`;
