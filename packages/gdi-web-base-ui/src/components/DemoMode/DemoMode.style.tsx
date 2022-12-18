import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    position: fixed;
    ${(props) => props.theme.right('14px')}
    ${(props) => props.theme.left('auto')}
    
    bottom: 230px;
    text-align: center;
    background-color: #ffd700;
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
        #ffd70066 0%,
        #ffd700ff 20%,
        #ffd700ff 90%,
        #ffd70067 100%
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
        bottom: 231px;
    }
`;

export const Content = styled.div`
    width: 600px;
    padding: 0 25px;
    font-size: 20px;
    font-variation-settings: 'wdth' 100, 'wght' 200;
`;

export const H1 = styled.h1`
    font-variation-settings: 'wdth' 100, 'wght' 300;
    text-align: center;
    font-size: 30px;
    padding: 0;
    margin: 50px 0 45px;
`;

export const P = styled.p`
    line-height: 1.6;
    font-size: 22px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 20px 20px 40px 10px;
`;

export const Column = styled.div`
    flex: 1;
    padding-left: 30px;
`;

export const H3 = styled.h3`
    padding: 0;
    margin: 0 0 10px;
    font-size: 23px;
    color: rgba(255, 255, 255, 0.5);
    font-variation-settings: 'wdth' 100, 'wght' 250;

    span {
        border-bottom: 1px solid gray;
    }
`;

export const Ul = styled.ul`
    margin: 0;
    padding: 0 30px;
    font-size: 20px;
    line-height: 1.8;
`;

export const Li = styled.li``;

export const Actions = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const Action = styled.div``;

export const Warning = styled.div`
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    position: relative;
    padding: 15px 15px 15px 40px;
    border-radius: 10px;
    margin: 10px 0 0;
    line-height: 1.6;
    background-color: rgba(0, 0, 0, 0.5);
    font-variation-settings: 'wdth' 100, 'wght' 500;

    &::before {
        content: '⚠️';
        position: absolute;
        left: 10px;
        top: 10px;
        font-size: 20px;
    }
`;
