import { Inner, SmallPrint, Subtext, Text, Wrapper } from './Txt.style';

export type TxtProps = {};

export function Txt(props: TxtProps) {
  return (
    <Wrapper className='Txt-wrapper' data-testid='Txt-wrapper'>
      <Inner>
        <Text>MODELZ</Text>
        <Subtext>== Get yours today ==</Subtext>
        <SmallPrint>
          Regular maintenance and servicing of the modelz hovercraft are essential for optimal
          performance and safety. VR training on Vision Ultra is required to operate a hovercraft in
          the case of engine failure.
        </SmallPrint>
      </Inner>
    </Wrapper>
  );
}

export default Txt;
