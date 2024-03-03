import { useDispatch } from '@gdi/store-base';
import { useMemo } from 'react';
import NewBoardPage from './NewReviewPage';
import { invokeEvent } from 'shared-base';

export type NewReviewPageContainerProps = {};

export function NewReviewPageContainer(_props: NewReviewPageContainerProps) {
  const dispatch = useDispatch();

  const callbacks = useMemo(
    () => ({
      onSave: (data: Json) => {
        invokeEvent('saveKeys', data);
      },
    }),
    []
  );

  return <NewBoardPage callbacks={callbacks} />;
}

export default NewReviewPageContainer;
