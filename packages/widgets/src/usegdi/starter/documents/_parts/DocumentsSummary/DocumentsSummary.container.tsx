import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { DocumentsSummary } from './DocumentsSummary';

export type DocumentsSummaryContainerProps = {};

export function DocumentsSummaryContainer(_props: DocumentsSummaryContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <DocumentsSummary />;
}

export default DocumentsSummaryContainer;
