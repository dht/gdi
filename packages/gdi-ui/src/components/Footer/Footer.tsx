import React from 'react';
import { Container, Wrapper } from './Footer.style';

export type FooterProps = {};

export function Footer(_props: FooterProps) {
  return (
    <Wrapper className='Footer-wrapper' data-testid='Footer-wrapper'>
      <Container>&copy; 2024, GDI</Container>
    </Wrapper>
  );
}

export default Footer;
