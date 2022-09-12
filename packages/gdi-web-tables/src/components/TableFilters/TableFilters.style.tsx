import styled from 'styled-components';

export const Container = styled.div<{ show?: boolean }>`
    transition: all 250ms ease-in-out;
    max-height: ${(props) => (props.show ? '300px' : '0px')};
    min-height: ${(props) => (props.show ? '300px' : '0px')};
    overflow: hidden;
`;
