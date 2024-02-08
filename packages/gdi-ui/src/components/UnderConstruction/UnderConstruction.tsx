import classnames from 'classnames';
import { Content, Line, Text, Wrapper } from './UnderConstruction.style';

export type UnderConstructionProps = {
  small?: boolean;
};

export function UnderConstruction(props: UnderConstructionProps) {
  const { small } = props;

  const className = classnames('UnderConstruction-wrapper', {
    small,
  });

  return (
    <Wrapper className={className} data-testid='UnderConstruction-wrapper'>
      <Content>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Text className='text' key={index}>
              Under Construction
            </Text>
          ))}
      </Content>

      <Line className='line'></Line>
    </Wrapper>
  );
}

export default UnderConstruction;
