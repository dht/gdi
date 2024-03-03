import React, { useCallback } from 'react';
import { Actions, Cta, Drop, P, Tags, Wrapper } from './AssetNew.style';
import { useDropzone } from 'react-dropzone';
import classnames from 'classnames';

export type AssetNewProps = {
  tags: string[];
  callbacks: {
    onDrop: (acceptedFiles: File[]) => void;
    onUpload: () => void;
  };
};

export function AssetNew(props: AssetNewProps) {
  const { tags = [], callbacks } = props;
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: callbacks.onDrop,
    maxFiles: 10,
    accept: {
      'image/*': [],
      'model/gltf-binary': ['.glb'],
      'audio/mpeg': [],
      'application/json': [],
      'application/zip': [],
    },
  });

  const className = classnames('AssetNew-wrapper', {
    active: isDragActive,
  });

  return (
    <Wrapper className={className} data-testid='AssetNew-wrapper'>
      <Drop {...getRootProps()}>
        <input {...getInputProps()} />
        <P>Drop files here</P>
        <Tags>
          <strong>Tags:</strong> {tags.join(', ')}
        </Tags>
      </Drop>
      <Actions>
        <Cta iconName='upload' onClick={callbacks.onUpload}>
          New Asset
        </Cta>
      </Actions>
    </Wrapper>
  );
}

export default AssetNew;
