import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    padding: 200px;
    text-align: center;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0.2;
        background: repeating-linear-gradient(
            -45deg,
            red,
            red 10px,
            pink 10px,
            pink 20px
        );
    }
`;

export const Header = styled.div`
    font-size: 34px;
    color: #eef;
`;

export const P = styled.div`
    margin-top: 10px;
    font-size: 26px;
    color: #aab;
`;
