import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    padding: 10px 6px;
`;

export const Id = styled.div`
    position: absolute;
    top: 30px;
    ${(props) => props.theme.right('30px')}
    font-size: 17px;
    font-weight: 500;
    color: #948e688a;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 5px 14px;
    box-shadow: inset -2px -2px 3px 3px rgba(0, 0, 0, 0.4);
    border-radius: 6px;
`;
