import { invokeEvent } from 'shared-base';
import { HomeIcon, LeftMenu } from './VisionHome.components';
import { icons } from './VisionHome.data';
import { Icons, Wrapper } from './VisionHome.style';

export type VisionHomeProps = {
  onNavigate: (id: string) => void;
};

export function VisionHome(props: VisionHomeProps) {
  function onClick(id: string) {
    props.onNavigate(id);
  }

  function renderIcon(icon: Json) {
    return <HomeIcon key={icon.id} value={icon} onClick={() => onClick(icon.id)} />;
  }

  function renderIcons() {
    return icons.map((icon: Json) => renderIcon(icon));
  }
  return (
    <Wrapper className='MockHome-wrapper' data-testid='MockHome-wrapper'>
      <LeftMenu />
      <Icons>{renderIcons()}</Icons>
    </Wrapper>
  );
}

VisionHome.panelType = 'none';

export default VisionHome;
