import { Scene } from 'isokit2';
import { Content, Wrapper } from './Babylon.style';
import { environment } from './Babylon.environment';

export type BabylonProps = {
  isLoading: boolean;
};

export function Babylon(props: BabylonProps) {
  const { isLoading } = props;

  return (
    <Wrapper className='Babylon-wrapper' data-testid='Babylon-wrapper'>
      <Content>
        <Scene
          isLoading={isLoading}
          showToolbox={false}
          freeMove={false}
          hideBase
          disableGizmos
          environment={environment}
        />
      </Content>
    </Wrapper>
  );
}

export default Babylon;
