import { RefObject, useContext } from 'react';
import { IElement } from '../../grid.types';
import { GridContext } from '../Grid/Grid.context';
import { Instance } from '../Instance/Instance';
import { isMobile } from '../../utils/mobile';
import MobileHeader from '../_mobile/MobileHeader/MobileHeader';

export type GridViewProps = {
  gridRef: RefObject<HTMLDivElement>;
};

export function GridView(props: GridViewProps) {
  const { state, elements } = useContext(GridContext);
  const { flavour, columnIndex, darkMode } = state;

  function renderElement(element: IElement) {
    const { flavour: f, columnIndex: c = -1 } = element;

    const isVisibleFlavour = !flavour || !f || flavour === f;
    const isVisibleMobile = !isMobile() || c == -1 || c === columnIndex; // prettier-ignore

    if (!isVisibleFlavour || !isVisibleMobile) {
      return null;
    }

    return <Instance key={element.id} element={element} />;
  }

  function renderElements() {
    return Object.values(elements).map((element) => renderElement(element));
  }

  function renderMobileHeader() {
    if (!isMobile()) return;
    return <MobileHeader />;
  }

  return (
    <>
      {renderElements()}
      {renderMobileHeader()}
    </>
  );
}

export default GridView;
