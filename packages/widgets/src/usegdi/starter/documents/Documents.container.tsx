import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Documents } from './Documents';
import { useSagas } from '../../../helpers/useSaga';

export type DocumentsContainerProps = {
  data: any;
};

export function DocumentsContainer(props: DocumentsContainerProps) {
  const dispatch = useDispatch();
  const documents = useSelector(selectors.md.$documents);

  useSagas([
    'widgets.documents', //
    'widgets.document',
  ]);

  const callbacks = useMemo(
    () => ({
      onAction: (verb: string, params?: Json) => {
        dispatch({
          type: 'DOCUMENT',
          verb,
          payload: params,
        });
      },
      onItemAction: (id: string, verb: string, payload?: Json) => {
        dispatch({
          type: 'DOCUMENT',
          verb,
          id,
          payload,
        });
      },
    }),
    []
  );

  return <Documents data={documents} callbacks={callbacks} />;
}

export default DocumentsContainer;
