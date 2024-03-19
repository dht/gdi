import { Multi } from 'multi';
import { PostWriterContainer } from '../post-writer/PostWriter.container';
import { Wrapper } from './Posts.style';
import { initialView, multi, views } from './_multi';
import { PostsSummaryContainer } from './_parts/PostsSummary/PostsSummary.container';

export type PostsProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
};

export function Posts(props: PostsProps) {
  const { data, callbacks } = props;

  function renderSummary() {
    return <PostsSummaryContainer />;
  }

  function renderFocus(id: string) {
    return <PostWriterContainer id={id} />;
  }

  return (
    <Wrapper className='Posts-wrapper' data-testid='Posts-wrapper'>
      <Multi //
        initialView={initialView}
        views={views}
        config={multi}
        data={data}
        callbacks={callbacks}
        darkMode
        renderSummary={renderSummary}
        renderFocus={renderFocus}
      />
    </Wrapper>
  );
}

export default Posts;
