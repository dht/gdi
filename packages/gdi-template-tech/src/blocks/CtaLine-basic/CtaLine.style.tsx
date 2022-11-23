import styled from 'styled-components';
import { CtaLineColors } from './CtaLine';

export const Container = styled.div<{ colors: CtaLineColors }>`
    background-color: white;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    flex: 1;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
