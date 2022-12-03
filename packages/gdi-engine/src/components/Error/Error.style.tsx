import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    padding: 200px;
    text-align: center;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        ${(props) => props.theme.left(0)}
        ${(props) => props.theme.right(0)}
        bottom: 0;
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
