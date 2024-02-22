import { Inner, SmallPrint, Subtext, Text, Wrapper } from './Txt.style';
import { ITxt } from './Txt.types';
import classnames from 'classnames';

export type TxtProps = {
  json: ITxt;
  absolute?: boolean;
};

export function Txt(props: TxtProps) {
  const { json, absolute } = props;
  const { config } = json;
  const { header, headerFont, subtext, subtextFont, smallPrint, smallPrintFont } = config;

  const className = classnames('Txt-wrapper', {
    absolute,
  });

  return (
    <Wrapper className={className} data-testid='Txt-wrapper'>
      <Inner className='inner'>
        <Text style={headerFont}>{header}</Text>
        <Subtext style={subtextFont}>{subtext}</Subtext>
        <SmallPrint style={smallPrintFont}>{smallPrint}</SmallPrint>
      </Inner>
    </Wrapper>
  );
}

export default Txt;
