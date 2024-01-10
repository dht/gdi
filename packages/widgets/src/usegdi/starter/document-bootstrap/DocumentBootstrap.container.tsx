import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useEffect, useMemo } from 'react';
import { DocumentBootstrap } from './DocumentBootstrap';
import { useMount } from 'react-use';
import { useSaga } from '../../../helpers/useSaga';

export type DocumentBootstrapContainerProps = {};

export function DocumentBootstrapContainer(_props: DocumentBootstrapContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const documentType = useSelector(selectors.options.$documentTypes);
  const documentLength = useSelector(selectors.options.$documentLength);
  const documentStyle = useSelector(selectors.options.$documentStyle);
  const document = useSelector(selectors.raw.$rawDocument);

  useSaga('widgets.document');

  const callbacks = useMemo(
    () => ({
      onBootstrap: (meta: Json) => {
        console.log('1 ->', 1);

        dispatch({
          type: 'DOCUMENT',
          verb: 'bootstrap',
          payload: meta,
        });
      },
    }),
    []
  );

  useEffect(() => {
    const { content } = document;
    if (content) {
      dispatch(actions.appState.patch({ flavour: 'adhoc' }));
    }
  }, [document]);

  const options = {
    documentType,
    documentLength,
    documentStyle,
  };

  return <DocumentBootstrap options={options} onBootstrap={callbacks.onBootstrap} />;
}

export default DocumentBootstrapContainer;
