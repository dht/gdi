import React from 'react';
import { Container, Version, Wrapper } from './Footer.style';

export type FooterProps = {
  version: string;
};

export function Footer(props: FooterProps) {
  const { version } = props;

  return (
    <Wrapper className='Footer-wrapper' data-testid='Footer-wrapper'>
      <Container>
        &copy; 2024, GDI
        <Version>{version}</Version>
      </Container>
    </Wrapper>
  );
}

export default Footer;
