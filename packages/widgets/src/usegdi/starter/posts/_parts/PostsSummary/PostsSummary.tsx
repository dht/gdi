import React from 'react';
import { Wrapper } from './PostsSummary.style';

export type PostsSummaryProps = {};

export function PostsSummary(_props: PostsSummaryProps) {
  return <Wrapper className='PostsSummary-wrapper' data-testid='PostsSummary-wrapper'></Wrapper>;
}

export default PostsSummary;
