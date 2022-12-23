import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    position: fixed;
    ${(props) => props.theme.right('14px')}
    ${(props) => props.theme.left('auto')}
    bottom: 80px;
    text-align: center;
    background-color: green;
    padding: 3px;
    font-size: 15px;
    font-weight: 500;
    ${(props) => props.theme.borderRadius('0 10px 10px 0')};
    ${(props) => props.theme.padding('3px 20px 5px')}
    transform: translate(${(props) =>
        props.theme.isRtl ? '-50%' : '50%'}) rotate(90deg);
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(
        180deg,
        #00ff0066 0%,
        #22aa33ff 20%,
        #22aa33ff 90%,
        #00ff0067 100%
    );
    cursor: pointer;
    user-select: none;

    &:hover {
        background-color: #109610;
    }

    &:active {
        ${(props) => props.theme.right('15px')}
        bottom: 81px;
    }
`;
