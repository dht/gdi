import styled from 'styled-components';
import { BigOneColors } from './BigOne';
import { darken } from 'polished';

export const Container = styled.div<{ colors: BigOneColors }>`
    background-color: white;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    flex: 1;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
