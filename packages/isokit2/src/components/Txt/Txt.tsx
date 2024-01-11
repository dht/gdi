import { Inner, SmallPrint, Subtext, Text, Wrapper } from './Txt.style';
import { Txt } from './Txt.types';

export type TxtProps = {
  txt: Txt;
};

export function Txt(props: TxtProps) {
  const { txt } = props;
  const { config } = txt;
  const { header, headerFont, subtext, subtextFont, smallPrint, smallPrintFont } = config;

  return (
    <Wrapper className='Txt-wrapper' data-testid='Txt-wrapper'>
      <Inner>
        <Text style={headerFont}>{header}</Text>
        <Subtext style={subtextFont}>{subtext}</Subtext>
        <SmallPrint style={smallPrintFont}>{smallPrint}</SmallPrint>
      </Inner>
    </Wrapper>
  );
}

export default Txt;
