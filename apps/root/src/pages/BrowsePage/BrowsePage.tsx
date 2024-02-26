import { IBoard } from '@gdi/store-base';
import { Gallery } from '@gdi/ui';
import { useState } from 'react';
import FilterContainer from '../../containers/Filter.container';
import GalleryContainer from '../../containers/Gallery.container';
import { Wrapper } from './BrowsePage.style';

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
    <Wrapper renderSticky={renderSticky}>
      <GalleryContainer boards={boards} onClick={callbacks.onClick} />
    </Wrapper>
  );
}

export default BrowsePage;
