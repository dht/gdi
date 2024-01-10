import { useMeasure } from 'react-use';
import { Content, Inner, Wrapper } from './Status.style';

export type StatusProps = {
  prompt?: string;
};

export function Status(props: StatusProps) {
  const { prompt = '' } = props;
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  const style = {
    animationName: prompt ? 'scroll' : 'none',
  };

  return (
    <Wrapper ref={ref} className='Status-wrapper' data-testid='Status-wrapper'>
      <Inner width={width} length={prompt.length}>
        <Content className='content' style={style}>
          {prompt}
        </Content>
      </Inner>
    </Wrapper>
  );
}

export default Status;
