import { Icon } from '../Icon/Icon';
import { Actions, Title, Wrapper } from './InstanceHeader.style';

export type InstanceHeaderProps = {
  onToggleDescription: () => void;
  onRemove?: () => void;
  title?: string;
  description?: string;
};

export function InstanceHeader(props: InstanceHeaderProps) {
  const { title = '', description = '' } = props;

  return (
    <Wrapper className='InstanceHeader-wrapper' data-testid='InstanceHeader-wrapper'>
      <Title>{title}</Title>
      <Actions>{description && <Icon icon='notes' onClick={props.onToggleDescription} />}</Actions>
    </Wrapper>
  );
}

export default InstanceHeader;
