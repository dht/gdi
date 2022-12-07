import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    position: fixed;
    ${(props) => props.theme.right('14px')}
    ${(props) => props.theme.left('auto')}
    bottom: 390px;
    text-align: center;
    background-color: #d799df;
    padding: 3px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 0 0 10px 10px;
    ${(props) => props.theme.padding('3px 20px 5px')}
    transform: translate(${(props) =>
        props.theme.isRtl ? '-50%' : '50%'}) rotate(90deg);
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(
        180deg,
        #d799df66 0%,
        #d799dfff 20%,
        #d799dfff 90%,
        #d799df67 100%
    );
    color: #334;
    cursor: pointer;
    user-select: none;

    &:hover {
        background-color: #b777c0;
        font-weight: 600;
    }

    &:active {
        ${(props) => props.theme.right('15px')}
        bottom: 391px;
    }
`;

export const TextArea = styled.textarea`
    width: 600px;
    height: 500px;
    background-color: #112;
    color: white;
    padding: 5px 10px;
    font-family: monospace;
    outline: none;
`;
