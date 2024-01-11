import { useRef } from 'react';
import Loader from '../Loader/Loader';
import { elements } from './Scene.data';
import { Canvas, Loading, ToolboxMain, ToolboxTop, Wrapper } from './Scene.style';
import { toolbarMain, toolbarTop } from './Scene.toolbox';
import { useMoveMesh } from './hooks/useMove';
import { usePick } from './hooks/usePick';
import { useScene } from './hooks/useScene';
import { useKey } from 'react-use';
import { IEnvironment, IPostEffect } from '@gdi/store-iso';
import { useAdhoc } from './hooks/useAdhoc';
import { usePostEffect } from './hooks/usePostEffect';
import { useArc } from './hooks/useArc';
import { useHome } from './hooks/useHome';

export type SceneProps = {
  isLoading?: boolean;
  showToolbox?: boolean;
  hideActions?: string[];
  adhocModelUrl?: string;
  adhocEffect?: IPostEffect;
  freeMove?: boolean;
  hideBase?: boolean;
  disableGizmos?: boolean;
  environment?: Partial<IEnvironment>;
  onToolbox?: (id: string) => void;
};

export function Scene(props: SceneProps) {
  const {
    isLoading,
    freeMove,
    hideActions = [],
    showToolbox,
    adhocModelUrl: adhocUrl,
    adhocEffect,
    hideBase,
    disableGizmos,
    environment,
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const isAdhoc = adhocUrl || adhocEffect;

  useScene(canvasRef, elements, {
    hideBase,
    disableGizmos,
    environment,
  });
  useMoveMesh(canvasRef, freeMove);
  usePick(canvasRef);
  useAdhoc(adhocUrl);
  usePostEffect(adhocEffect);
  useArc();
  useHome();

  function renderToolboxes() {
    if (!showToolbox || !props.onToolbox) {
      return null;
    }

    const mainItems = toolbarMain.filter((item) => !hideActions.includes(item.id));
    const topItems = toolbarTop.filter((item) => !hideActions.includes(item.id));

    return (
      <>
        <ToolboxMain items={mainItems} onAction={props.onToolbox} />
        <ToolboxTop items={topItems} horizontal commandMode onAction={props.onToolbox} />
      </>
    );
  }

  function renderLoader() {
    if (!isLoading) {
      return null;
    }

    return (
      <Loading>
        Restoring elements...
        <Loader />
      </Loading>
    );
  }

  return (
    <Wrapper className='Scene-wrapper' data-testid='Scene-wrapper'>
      <Canvas ref={canvasRef} />
      {renderToolboxes()}
      {renderLoader()}
    </Wrapper>
  );
}

export default Scene;
