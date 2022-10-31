import styled from 'styled-components';
import { UserBarColors } from './UserBar';
import { darken } from 'polished';

export const Container = styled.div<{
    colors: UserBarColors;
    position: string;
}>`
    display: flex;
    position: ${(props) => props.position};
    top: ${(props) => (props.position === 'absolute' ? '10px' : 0)};
    z-index: 2;
    ${(props) => props.theme.left(0)}
    ${(props) => props.theme.right(0)}
    min-height: 100px;
    transition: all 150ms ease-out;
    background-color: ${(props) => props.colors.background ?? 'transparent'};

    @media (max-width: 768px) {
        height: auto;
        max-height: none;
        padding: 80px 20px;
    }

    &.inverted {
        background-color: rgba(255, 255, 255, 0.9);
        box-shadow: 0 10px 5px 3px rgba(0, 0, 0, 0.1);
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 50px;
    padding: 10px 0;
    flex: 1;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
    }
`;
