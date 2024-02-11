import { get } from 'lodash';
import { useMemo } from 'react';
import { Wrapper } from './DocsNext.style';
import { calculateCursors } from './DocsNext.utils';

export type DocsNextProps = {
  docTree: any;
  hash: string;
  onCta?: (value: string) => void;
  onCancel?: () => void;
};

export function DocsNext(props: DocsNextProps) {
  const { docTree, hash } = props;

  const cursors = useMemo(() => {
    return calculateCursors(docTree, hash);
  }, [docTree, hash]);

  const nextPath = get(cursors, 'next.path', '');
  const text = nextPath ? 'Next' : 'Start Exploring';

  function onClick() {
    if (!nextPath) {
      props.onCancel?.();
      return;
    }

    document.location.hash = nextPath;
  }

  return (
    <Wrapper className='DocsNext-wrapper' data-testid='DocsNext-wrapper' onClick={onClick}>
      {text}
    </Wrapper>
  );
}

export default DocsNext;
