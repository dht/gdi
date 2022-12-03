import styled, { css } from 'styled-components';
import { mobile } from '../helpers';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    ${mobile(css`
        flex-direction: column;
    `)}
`;
