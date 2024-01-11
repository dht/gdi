import { Inner, SmallPrint, Subtext, Text, Wrapper } from './Txt.style';
import { ITxt } from './Txt.types';

export type TxtProps = {
  json: ITxt;
};

export function Txt(props: TxtProps) {
  const { json } = props;
  const { config } = json;
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
