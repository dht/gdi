import { ChartDoughnut } from '../ChartDoughnut/ChartDoughnut';
import { Label, Wrapper } from './ChartTime.style';
import { CenterValue } from './_parts/CenterValue/CenterValue';

export type ChartTimeProps = {
  title?: string;
  data: Record<string, number>;
  colors: Record<string, string>;
  size?: number;
  centerLabel: string;
  centerValue: string;
  labelParser?: (value: number) => string;
};

export function ChartTime(props: ChartTimeProps) {
  const { title, data, colors, size, centerLabel, centerValue } = props;

  return (
    <Wrapper className='ChartTime-wrapper' data-testid='ChartTime-wrapper'>
      <ChartDoughnut data={data} colors={colors} size={size} labelParser={props.labelParser} />
      <CenterValue label={centerLabel} value={centerValue} />
      <Label>{title}</Label>
    </Wrapper>
  );
}

export default ChartTime;
