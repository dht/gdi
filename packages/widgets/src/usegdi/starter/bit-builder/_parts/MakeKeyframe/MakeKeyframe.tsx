import { Icon } from '@gdi/ui';
import classnames from 'classnames';
import { useEnter } from './MakeKeyframe.hooks';
import { Column, Short, Title, Wrapper } from './MakeKeyframe.style';

export type MakeKeyframeProps = {
  onClick: () => void;
};

export function MakeKeyframe(props: MakeKeyframeProps) {
  const isMac = navigator.userAgent.toLowerCase().indexOf('mac') >= 0;
  const shortKey = isMac ? '⌘Enter' : 'Ctrl+Enter';
  const isKeyDown = useEnter(props.onClick, true);

  const className = classnames('MakeKeyframe-wrapper', {
    active: isKeyDown,
  });

  return (
    <Wrapper className={className} data-testid='MakeKeyframe-wrapper' onClick={props.onClick}>
      <Icon size={30} name='capture' />
      <Column>
        <Title>Keyframe</Title>
        <Short>{shortKey}</Short>
      </Column>
    </Wrapper>
  );
}

export default MakeKeyframe;
