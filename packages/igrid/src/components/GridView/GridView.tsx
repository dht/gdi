import { RefObject, useContext } from 'react';
import { IElement } from '../../grid.types';
import { GridContext } from '../Grid/Grid.context';
import { Instance } from '../Instance/Instance';
import { MobileControls, MobileRoot } from '../_mobile';
import { isMobile } from '../../utils/mobile';

export type GridViewProps = {
  gridRef: RefObject<HTMLDivElement>;
};

export function GridView(_props: GridViewProps) {
  const { state, elements } = useContext(GridContext);
  const { flavour } = state;

  function renderElement(element: IElement) {
    const isVisible = !flavour || !element.flavour || element.flavour === flavour;

    if (!isVisible) {
      return null;
    }

    return <Instance key={element.id} element={element} />;
  }

  function renderElements() {
    return Object.values(elements).map((element) => renderElement(element));
  }

  function renderMobileControls() {
    if (!isMobile) return;
    return <MobileControls />;
  }

  return (
    <>
      {renderElements()}
      {renderMobileControls()}
    </>
  );
}

export default GridView;
