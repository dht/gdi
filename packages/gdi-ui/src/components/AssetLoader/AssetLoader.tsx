import { ISceneAssetLoaderWithStage } from '@gdi/store-iso';
import bytes from 'bytes';
import ProgressBar from '../ProgressBar/ProgressBar';
import {
  Loader,
  Panel,
  Percent,
  Size,
  SizeProgress,
  Stage,
  StageBk,
  Text,
  Wrapper,
} from './AssetLoader.style';

export type AssetLoaderProps = {
  state: ISceneAssetLoaderWithStage;
};

export function AssetLoader(props: AssetLoaderProps) {
  const { state } = props;
  const { bytesCompleted, bytesTotal, percent, stage } = state;

  const { bkUrl, stageUrl } = stage ?? {};

  const percentText = `${Math.ceil(percent)}%`;

  return (
    <Wrapper className='AssetLoader-wrapper' data-testid='AssetLoader-wrapper'>
      <StageBk $url={bkUrl}>
        <Stage $url={stageUrl} />
        <Loader>
          <Percent>{percentText}</Percent>
          <Text>Loading scene's assets...</Text>
          <ProgressBar />
          <SizeProgress>
            <Size>{bytes(bytesCompleted)}</Size> / <Size>{bytes(bytesTotal)}</Size>
          </SizeProgress>
        </Loader>
      </StageBk>
      <Panel></Panel>
    </Wrapper>
  );
}

export default AssetLoader;
