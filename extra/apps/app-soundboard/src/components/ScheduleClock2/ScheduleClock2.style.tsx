import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 8px;
    flex: 1;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    transform: rotate3d(0.2, 1, 0, 15deg);
    position: relative;
`;

const Button = styled.a`
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
    cursor: pointer;
    color: white;

    i {
        font-size: 18px;
    }

    &:hover {
        color: palevioletred;
    }

    &:active {
        transform: translateY(-1px) translateX(-1px);
    }
`;

export const Radio = styled(Button)`
    position: absolute;
    bottom: 5px;
    ${(props) => props.theme.right('8px')}
    ${(props) => props.theme.marginLeft('5px')}
    z-index: 2;
`;

export const Clear = styled(Button)`
    position: absolute;
    bottom: 5px;
    ${(props) => props.theme.left('8px')}
    ${(props) => props.theme.marginRight('5px')}
    z-index: 2;
`;
