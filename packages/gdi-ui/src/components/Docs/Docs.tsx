import { useEffect, useRef } from 'react';
import Loader from '../Loader/Loader';
import Markdown from '../Markdown/Markdown';
import { useDoc, useDocs, useHash } from './Docs.hooks';
import { Container, Left, Right, Wrapper } from './Docs.style';
import DocsMenu from './_parts/DocsMenu/DocsMenu';
import { isMobile } from '../../utils/mobile';
import DocsMenuMobile from './_parts/DocsMenuMobile/DocsMenuMobile';

export type DocsProps = {
  initialPath: string;
  baseUrl: string;
  data: Json;
};

export function Docs(props: DocsProps) {
  const { baseUrl } = props;
  const [docTree, { isLoading, error }] = useDocs(baseUrl);
  const [hash, changeHash] = useHash('installation/installation.md');
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

    return <Markdown markdown={docContent ?? ''} />;
  }

  function renderMenu() {
    if (isMobile()) {
      return <DocsMenuMobile data={docTree} isLoading={isLoading} onSelect={onSelect} />;
    }

    return (
      <Left>
        <DocsMenu data={docTree} isLoading={isLoading} onSelect={onSelect} />
      </Left>
    );
  }

  return (
    <Wrapper className='Docs-wrapper' data-testid='Docs-wrapper'>
      <Container $row>
        {renderMenu()}
        <Right ref={ref}>{renderContent()}</Right>
      </Container>
    </Wrapper>
  );
}

export default Docs;
