import React from 'react';
import { Wrapper } from './DocumentFocus.style';
import Document from '../../../document/Document';
import DocumentContainer from '../../../document/Document.container';
import { IDocument } from '@gdi/store-base';
import { get } from 'lodash';

export type DocumentFocusProps = {
  document?: IDocument;
};

export function DocumentFocus(props: DocumentFocusProps) {
  const { document } = props;

  const fileName = get(document, 'meta.fileName');

  if (!document) return null;

  return (
    <Wrapper className='DocumentFocus-wrapper' data-testid='DocumentFocus-wrapper'>
      <DocumentContainer forceFilename={fileName} actionTypeSave='DOCUMENT' />
    </Wrapper>
  );
}

export default DocumentFocus;
