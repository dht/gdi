import styled from 'styled-components';
import { FourPackColors } from './FourPack';
import { darken } from 'polished';

export const Container = styled.div<{ colors: FourPackColors }>`
    flex: 1;
    display: flex;
    background-color: white;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    flex: 1;

    > div {
        margin: 5px 0;
    }
`;
