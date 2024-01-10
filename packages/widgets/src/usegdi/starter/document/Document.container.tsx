import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Document } from './Document';
import SavePanelContainer from '../save-panel/SavePanel.container';
import { useSaga } from '../../../helpers/useSaga';

export type DocumentContainerProps = {};

export function DocumentContainer(_props: DocumentContainerProps) {
  const dispatch = useDispatch();
  const document = useSelector(selectors.raw.$rawDocument);
  const disabled = document.content === '';

  useSaga('widgets.document');

  const callbacks = useMemo(
    () => ({
      onChange: (ev: any) => {
        const content = ev.target.value;
        dispatch(actions.document.patch({ content }));
      },
    }),
    [document]
  );

  return (
    <Document document={document} callbacks={callbacks}>
      <SavePanelContainer what='document' verb='saveDocument' disabled={disabled} />
    </Document>
  );
}

export default DocumentContainer;
