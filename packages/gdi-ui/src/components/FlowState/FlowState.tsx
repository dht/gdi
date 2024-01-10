import classnames from 'classnames';
import { Status, Wrapper } from './FlowState.style';

export type FlowStateProps = {
  data: Json;
};

export function FlowState(props: FlowStateProps) {
  const { data } = props;
  const { status } = data ?? {};

  const className = classnames('status', status, {});

  return (
    <Wrapper className='FlowState-wrapper' data-testid='FlowState-wrapper'>
      <Status className={className}>{status}...</Status>
    </Wrapper>
  );
}

export default FlowState;
