import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { DocumentFocus } from './DocumentFocus';
import { useMount } from 'react-use';
import { get } from 'lodash';

export type DocumentFocusContainerProps = {
  id: string;
};

export function DocumentFocusContainer(props: DocumentFocusContainerProps) {
  const dispatch = useDispatch();
  const { id } = props;
  const document = useSelector(selectors.raw.$rawDocument);

  useMount(() => {
    dispatch({
      type: 'DOCUMENT',
      verb: 'fetch',
      id,
    });
  });

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  if (!id) return;

  return <DocumentFocus document={document} />;
}

export default DocumentFocusContainer;
