import styled from 'styled-components';
import { $CMPColors } from './$CMP';
import { darken } from 'polished';

export const Wrapper = styled.div<{ colors: $CMPColors }>`
    flex: 1;
    background-color: ${(props) => props.colors.background ?? '#1a7870'};
    height: 60vh;
    max-height: 800px;
    display: flex;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    flex: 1;
`;

export const CTA = styled.a<{ colors: $CMPColors }>`
    background-color: ${(props) => props.colors.text ?? '#aaef69'};
    font-weight: bold;
    color: #333;
    text-decoration: none;
    font-size: 17px;
    padding: 10px 50px;
    border: none;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) =>
            darken(0.1, props.colors.text ?? '#aaef69')};
    }

    &:active {
        position: relative;
        bottom: 2px;
        ${(props) => props.theme.left('2px')}
    }
`;
