import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Document } from './Document';
import SavePanelContainer from '../save-panel/SavePanel.container';
import { useSaga } from '../../../helpers/useSaga';

export type DocumentContainerProps = {
  forceFilename?: string;
  actionTypeSave?: string;
};

export function DocumentContainer(props: DocumentContainerProps) {
  const { forceFilename, actionTypeSave } = props;
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const document = useSelector(selectors.raw.$rawDocument);
  const disabled = document.content === '';
  const { docId } = currentIds;

  const { suggestedFileName } = appState;

  useSaga('widgets.docEdit');

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
      <SavePanelContainer
        what='document'
        verb='saveDocument'
        disabled={disabled}
        defaultValue={forceFilename ?? suggestedFileName}
        actionTypeSave={actionTypeSave}
        actionItemId={docId}
      />
    </Document>
  );
}

export default DocumentContainer;
