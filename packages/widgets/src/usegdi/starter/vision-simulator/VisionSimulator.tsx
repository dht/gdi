import { IBit, ISceneAssetLoaderWithStage, ISceneState } from '@gdi/store-iso';
import { AssetLoader, UnderConstruction } from '@gdi/ui';
import { Scene, useGlbReady } from 'isokit2';
import { ReactNode } from 'react';
import { MultitrackOptions, MultitrackTracks } from 'wavesurfer-multitrack';
import { environment } from './VisionSimulator.environment';
import { Canvas, Wrapper } from './VisionSimulator.style';

export type VisionSimulatorProps = {
  assetLoader: ISceneAssetLoaderWithStage;
  children?: ReactNode;
};

export function VisionSimulator(props: VisionSimulatorProps) {
  const { assetLoader } = props;
  const { isLoading } = assetLoader;
  const isGlbReady = useGlbReady();

  if (isLoading) {
    return <AssetLoader state={assetLoader} />;
  }

  return (
    <Wrapper className='VisionSimulator-wrapper' data-testid='VisionSimulator-wrapper'>
      <Canvas>
        <Scene
          isLoading={!isGlbReady}
          showToolbox={false}
          freeMove={false}
          hideBase
          environment={environment}
        />
      </Canvas>
      <UnderConstruction />
    </Wrapper>
  );
}

export default VisionSimulator;
