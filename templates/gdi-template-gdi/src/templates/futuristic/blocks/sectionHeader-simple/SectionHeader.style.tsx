import styled from 'styled-components';
import { SectionHeaderColors } from './SectionHeader';

export const Container = styled.div<{
    hidden?: boolean;
    colors: SectionHeaderColors;
}>`
    flex: 1;
    height: ${(props) => (props.hidden ? 0 : '100px')};
    overflow: hidden;
    display: flex;
    background-color: white;

    @media (max-width: 768px) {
        height: auto;
        max-height: none;
        padding: 80px 20px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    margin: 0 auto;
    flex: 1;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Text = styled.h1`
    color: #667;
    font-size: 42px;
    font-weight: bold;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 42px;
    }
`;
