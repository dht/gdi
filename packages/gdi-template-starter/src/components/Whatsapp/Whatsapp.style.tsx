import styled from 'styled-components';

export const Wrapper = styled.a`
    position: relative;
    cursor: pointer;
    text-decoration: none;
    color: #eef;

    &:hover {
        .content {
            background-color: #111;
        }

        .icon {
            filter: brightness(110%);
        }
    }
`;

export const Content = styled.div`
    background-color: #000;
    padding: 10px 40px 10px 80px;
    border-radius: 40px;
    border: 1px solid #556;
`;

export const Title = styled.div`
    font-size: 30px;
    font-variation-settings: 'wdth' 140, 'wght' 750;
`;

export const Subtitle = styled.div`
    font-size: 18px;
    font-variation-settings: 'wdth' 100, 'wght' 650;
    color: #47c857;
`;

export const Icon = styled.div`
    position: absolute;
    left: -30px;
    top: -10px;
    width: 50px;
    height: 50px;

    img {
        width: 100px;
    }
`;
