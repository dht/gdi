import { P, Wrapper } from './Welcome.style';

export type WelcomeProps = {};

export function Welcome(_props: WelcomeProps) {
  return (
    <Wrapper className='Welcome-wrapper' data-testid='Welcome-wrapper'>
      <P>Welcome to GDI</P>
      <P>Anything is possible with GDI </P>
      <P>The only limit is your imagination</P>
    </Wrapper>
  );
}

export default Welcome;
