import {
  actions,
  selectors,
  useAuth,
  useDispatch,
  useSelector,
} from '@gdi/store-base';
import { useEffect, useMemo } from 'react';
import BrowsePageContainer from '../BrowsePage/BrowsePage.container';
import HomePage from './HomePage';
export type HomePageContainerProps = {};

export function HomePageContainer(_props: HomePageContainerProps) {
  const dispatch = useDispatch();
  const isGuest = useSelector(selectors.base.$isGuest);
  const boards = useSelector(selectors.base.$myBoards);
  const appState = useSelector(selectors.raw.$rawAppState);
  const { isLoadingMyBoards } = appState;

  const callbacks = useMemo(
    () => ({
      onBrowse: () => {
        dispatch({
          type: 'NAVIGATE',
          to: '/browse',
        });
      },
      onQuickStart: () => {
        dispatch({
          type: 'HOME',
          verb: 'quickStart',
        });
      },
      onClick: (board: Json) => {
        dispatch({
          type: 'HOME',
          verb: 'navigateToDetails',
          id: board.id,
          params: {
            isBrowse: false,
          },
        });
      },
    }),
    []
  );

  if (isGuest) {
    return <BrowsePageContainer />;
  }

  return (
    <HomePage
      boards={boards}
      isLoading={isLoadingMyBoards}
      isGuest={isGuest}
      callbacks={callbacks}
    />
  );
}

export default HomePageContainer;
