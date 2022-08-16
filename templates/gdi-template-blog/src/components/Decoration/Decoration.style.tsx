import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    position: absolute;
    bottom: 0px;
    height: 40px;
    width: 90%;
    left: 100px;
    border-top: 2px solid gold;

    &.pink {
        border-top-color: #d2126b;
        left: auto;
        right: 100px;

        .line {
            border-left-color: #d2126b;
            float: right;
            transform: rotate(-30deg) translateX(15px) translateY(2px);
        }
    }
`;

export const Line = styled.div`
    border-left: 2px solid gold;
    height: 48px;
    transform: rotate(30deg) translateX(-13px) translateY(2px);
    width: 2px;
`;
