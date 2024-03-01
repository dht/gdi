import { useEffect, useRef } from 'react';
import Loader from '../Loader/Loader';
import Markdown from '../Markdown/Markdown';
import { useDoc, useDocs, useHash } from './Docs.hooks';
import { Container, Left, Next, Right, Wrapper } from './Docs.style';
import DocsMenu from './_parts/DocsMenu/DocsMenu';
import { isMobile } from '../../utils/mobile';
import DocsMenuMobile from './_parts/DocsMenuMobile/DocsMenuMobile';
import classnames from 'classnames';
import Button from '../Button/Button';
import DocsNext from './_parts/DocsNext/DocsNext';

export type DocsProps = {
  initialPath: string;
  baseUrl: string;
  showNext?: boolean;

  // modal
  modal?: boolean;
  onCta?: (value: string) => void;
  onCancel?: () => void;
};

export function Docs(props: DocsProps) {
  const { baseUrl, initialPath, modal, showNext } = props;
  const [docTree, { isLoading, error }] = useDocs(baseUrl);
  const [hash, changeHash] = useHash(initialPath);
  const [docContent, { isLoading: isLoadingDoc, error: errorDoc }] = useDoc(baseUrl, hash);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    window.scrollTo(0, 0);
  }, [hash]);

  function onSelect(doc: Json) {
    changeHash(doc.path);
    document.location.hash = doc.path;
  }

  function renderContent() {
    if (isLoadingDoc) {
      return <Loader debounce={500} />;
    }

    if (errorDoc) {
      return <div>Error: {error}</div>;
    }

    return <Markdown markdown={docContent ?? ''} mode='dark' />;
  }

  function renderMenu() {
    if (isMobile()) {
      return <DocsMenuMobile data={docTree} isLoading={isLoading} onSelect={onSelect} />;
    }

    return (
      <Left className='left'>
        <DocsMenu data={docTree} isLoading={isLoading} onSelect={onSelect} modal={modal} />
      </Left>
    );
  }

  function renderNextButton() {
    if (!showNext) return null;

    return (
      <Next>
        <DocsNext docTree={docTree} hash={hash} onCta={props.onCta} onCancel={props.onCancel} />
      </Next>
    );
  }

  const className = classnames('Docs-wrapper', {
    modal,
  });

  return (
    <Wrapper className={className} data-testid='Docs-wrapper'>
      <Container $row className='container'>
        {renderMenu()}
        <Right className='right' ref={ref}>
          {renderContent()}
        </Right>
      </Container>
      {renderNextButton()}
    </Wrapper>
  );
}

export default Docs;
