import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import BrowsePage from './BrowsePage';
import { useMemo } from 'react';

export type BrowsePageContainerProps = {};

export function BrowsePageContainer(_props: BrowsePageContainerProps) {
  const dispatch = useDispatch();
  const boards = useSelector(selectors.base.$boards);

  const callbacks = useMemo(
    () => ({
      onClick: (board: Json) => {
        dispatch({
          type: 'HOME',
          verb: 'board',
          id: board.id,
          params: {
            isBrowse: true,
          },
        });
      },
    }),
    []
  );

  return <BrowsePage boards={boards} callbacks={callbacks} />;
}

export default BrowsePageContainer;
