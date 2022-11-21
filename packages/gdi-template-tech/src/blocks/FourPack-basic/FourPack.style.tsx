import styled from 'styled-components';
import { FourPackColors } from './FourPack';
import { darken } from 'polished';

export const Container = styled.div<{ colors: FourPackColors }>`
    flex: 1;
    display: flex;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    flex: 1;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
