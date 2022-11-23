import styled from 'styled-components';

export const Container = styled.div<{ width: number }>`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1px;
    background-image: linear-gradient(
        90deg,
        rgb(247, 198, 38) 15%,
        rgb(246, 140, 47) 40%,
        rgb(229, 18, 125) 85%
    );

    max-width: 1300px;
    margin: 0 auto;
    flex-wrap: wrap;

    .HeroArticle-container {
        height: 377px;

        &:nth-child(1) {
            flex-basis: calc(70% - 4px);
            height: 350px;
        }
        &:nth-child(2) {
            flex-basis: calc(30% - 4px);
            height: 350px;
        }
        &:nth-child(3) {
            flex-basis: calc(30% - 4px);
        }
        &:nth-child(4) {
            flex-basis: calc(70% - 4px);
            flex-direction: row-reverse;
            text-align: right;
            height: 377px;

            .author {
                justify-content: flex-end;
            }
        }
        &:nth-child(5) {
            flex-basis: calc(33% - 4px);
        }
        &:nth-child(6) {
            flex-basis: calc(33% - 4px);
        }
        &:nth-child(7) {
            flex-basis: calc(33% - 4px);
        }
    }
`;

export const Wrapper = styled.div``;
export const Row = styled.div``;
