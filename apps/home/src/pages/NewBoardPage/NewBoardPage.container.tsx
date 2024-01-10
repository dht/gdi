import { useMemo } from 'react';
import { invokeEvent } from 'shared-base';
import NewBoardPage from './NewBoardPage';

export type NewBoardPageContainerProps = {};

export function NewBoardPageContainer(_props: NewBoardPageContainerProps) {
  const callbacks = useMemo(
    () => ({
      onSave: (data: Json) => {
        invokeEvent('saveBoard', data);
      },
    }),
    []
  );

  return <NewBoardPage callbacks={callbacks} />;
}

export default NewBoardPageContainer;
