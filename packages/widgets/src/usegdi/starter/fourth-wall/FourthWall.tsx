import { IBit, ISceneAssetLoaderWithStage, ISceneState } from '@gdi/store-iso';
import { AssetLoader } from '@gdi/ui';
import { Scene } from 'isokit2';
import { ReactNode } from 'react';
import { MultitrackOptions, MultitrackTracks } from 'wavesurfer-multitrack';
import BitPanel from '../bit-panel/BitPanel';
import { environment } from './FourthWall.environment';
import { Canvas, Wrapper } from './FourthWall.style';

export type FourthWallProps = {
  assetLoader: ISceneAssetLoaderWithStage;
  waveTracks: MultitrackTracks;
  waveOptions: Partial<MultitrackOptions>;
  bit?: IBit;
  state: ISceneState;
  elementLabels: Json;
  dotId: string;
  hideBase: boolean;
  element?: Json;
  timelines: any[];
  callbacks: {
    onToolbox: (commandId: string) => void;
    onAudio: (verb: string) => void;
    onBit: (verb: string) => void;
  };
  children?: ReactNode;
};

export function FourthWall(props: FourthWallProps) {
  const { assetLoader } = props;
  const { isLoading } = assetLoader;

  if (isLoading) {
    return <AssetLoader state={assetLoader} />;
  }

  return (
    <Wrapper className='FourthWall-wrapper' data-testid='FourthWall-wrapper'>
      <Canvas>
        <Scene
          isLoading={false}
          showToolbox={false}
          freeMove={false}
          withLoader={true}
          hideBase
          environment={environment}
        />
      </Canvas>
      <BitPanel {...props} />
    </Wrapper>
  );
}

export default FourthWall;
