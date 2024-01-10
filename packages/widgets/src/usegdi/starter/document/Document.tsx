import { IDocument } from '@gdi/store-base';
import { Save } from '@gdi/ui';
import { Actions, Textarea, Wrapper } from './Document.style';

export type DocumentProps = {
  document: IDocument;
  callbacks: {
    onChange: (ev: any) => void;
  };
  children?: React.ReactNode;
};

export function Document(props: DocumentProps) {
  const { document, callbacks } = props;

  return (
    <Wrapper className='Document-wrapper' data-testid='Document-wrapper'>
      <Textarea defaultValue={document.content} onChange={callbacks.onChange} />
      <Actions>{props.children}</Actions>
    </Wrapper>
  );
}

export default Document;
