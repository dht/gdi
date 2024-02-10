import { IBit, ISceneAssetLoaderWithStage, ISceneState } from '@gdi/store-iso';
import { AssetLoader, UnderConstruction } from '@gdi/ui';
import { Scene, useGlbReady } from 'isokit2';
import { ReactNode } from 'react';
import { MultitrackOptions, MultitrackTracks } from 'wavesurfer-multitrack';
import { environment } from './Claire.environment';
import { Wrapper } from './Claire.style';

export type ClaireProps = {
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

export function Claire(props: ClaireProps) {
  const { assetLoader } = props;
  const { isLoading } = assetLoader;
  const isGlbReady = useGlbReady();

  if (isLoading) {
    return <AssetLoader state={assetLoader} />;
  }

  return (
    <Wrapper className='Claire-wrapper' data-testid='Claire-wrapper'>
      <Scene
        isLoading={!isGlbReady}
        showToolbox={false}
        freeMove={false}
        hideBase
        environment={environment}
      />
      <UnderConstruction small />
    </Wrapper>
  );
}

export default Claire;
