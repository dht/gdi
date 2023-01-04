import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding-top: 20vh;
    flex: 1;

    button {
        zoom: 1.3;
    }
`;
export const H1 = styled.div`
    -webkit-mask-image: url(/welcome-fg3.png);
    mask-image: url(/welcome-fg3.png);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
`;

export const P = styled.p`
    font-size: 25px;
    max-width: 500px;
    line-height: 1.5;
    text-align: center;
    font-variation-settings: 'wdth' 100, 'wght' 300;
    color: rgba(255, 255, 255, 0.8);
`;

export const Actions = styled.div`
    margin-top: 30px;
`;
