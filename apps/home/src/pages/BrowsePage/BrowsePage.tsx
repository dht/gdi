import { IBoard } from '@gdi/store-base';
import { Gallery } from '@gdi/ui';
import { useState } from 'react';
import FilterContainer from '../../containers/Filter.container';
import BasePage from '../BasePage';
import GalleryContainer from '../../containers/Gallery.container';

export type BrowsePageProps = {
  boards: IBoard[];
  callbacks: {
    onClick: (board: IBoard) => void;
  };
};

export function BrowsePage(props: BrowsePageProps) {
  const { boards, callbacks } = props;

  function renderSticky() {
    return <FilterContainer />;
  }

  return (
    <BasePage renderSticky={renderSticky}>
      <GalleryContainer boards={boards} onClick={callbacks.onClick} />
    </BasePage>
  );
}

export default BrowsePage;
