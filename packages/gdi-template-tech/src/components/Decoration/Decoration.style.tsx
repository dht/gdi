import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    position: absolute;
    bottom: 0px;
    height: 40px;
    width: 90%;
    ${(props) => props.theme.left('100px')}
    border-top: 2px solid gold;

    &.pink {
        border-top-color: #d2126b;
        ${(props) => props.theme.left('auto')}
        ${(props) => props.theme.right('100px')}        

        .line {
            border-left-color: #d2126b;
            ${(props) => props.theme.floatRight()}
            transform: rotate(-30deg) translateX(15px) translateY(2px);
        }
    }
`;

export const Line = styled.div`
    ${(props) => props.theme.borderLeft('2px solid gold')}
    height: 48px;
    transform: rotate(30deg) translateX(-13px) translateY(2px);
    width: 2px;
`;
