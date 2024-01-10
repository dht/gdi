import { Wrapper } from './Footer.style';

export type FooterProps = {};

export function Footer(_props: FooterProps) {
  return (
    <Wrapper className='Footer-wrapper' data-testid='Footer-wrapper'>
      Version 0.0.1 | <span>MAY-2023</span>
    </Wrapper>
  );
}

export default Footer;
