import React from 'react';
import { Wrapper } from './Posts.style';
import { Multi } from 'multi';
import { multi, initialView, views } from './_multi';
import PostsSummary from './_parts/PostsSummary/PostsSummary.container';

export type PostsProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
};

export function Posts(props: PostsProps) {
  const { data, callbacks } = props;

  return (
    <Wrapper className='Posts-wrapper' data-testid='Posts-wrapper'>
      <Multi //
        initialView={initialView}
        views={views}
        config={multi}
        data={data}
        callbacks={callbacks}
        darkMode
      >
        <PostsSummary />
      </Multi>
    </Wrapper>
  );
}

export default Posts;
