import styled from 'styled-components';

export const Container = styled.div`
    @media (max-width: 768px) {
        height: auto;
        max-height: none;
        padding: 80px 20px;
    }
`;

export const Items = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    border: 1px solid gold;
`;

export const Item = styled.div<{ imageUrl: string; width: number }>`
    background-image: url(${(props) => props.imageUrl});
    width: ${(props) => props.width + 'px'};
    height: 290px;
    background-size: cover;
    background-position: center center;
`;

export const SwitchWrapper = styled.div`
    max-width: 600px;
    margin: 30px auto;

    > div {
    }
`;
