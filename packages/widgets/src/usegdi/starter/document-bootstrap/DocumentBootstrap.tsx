import { IDocumentMeta } from '@gdi/store-base';
import { BootstrapParams } from '@gdi/ui';
import { initialState, parameters } from './DocumentBootstrap.data';
import { Wrapper } from './DocumentBootstrap.style';

export type DocumentBootstrapProps = {
  options: any;
  onBootstrap: (meta: IDocumentMeta) => void;
};

export function DocumentBootstrap(props: DocumentBootstrapProps) {
  const { options } = props;

  function onCta(data: Json) {
    const { documentType, documentLength, documentStyle, topicAndInstructions } = data;

    props.onBootstrap({
      documentType: documentType as any,
      lengthInstructions: documentLength,
      styleInstructions: documentStyle,
      topicAndInstructions,
    } as any);
  }

  return (
    <Wrapper className='DocumentBootstrap-wrapper' data-testid='DocumentBootstrap-wrapper'>
      <BootstrapParams
        id='document'
        customInstructionsId='topicAndInstructions'
        customInstructionsPlaceholder='Topic and instructions'
        ctaButtonText='Bootstrap Document'
        options={options}
        parameters={parameters}
        initialState={initialState}
        onCta={onCta}
      />
    </Wrapper>
  );
}

export default DocumentBootstrap;
