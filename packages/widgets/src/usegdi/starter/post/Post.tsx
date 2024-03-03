import React from 'react';
import { Wrapper } from './Post.style';

export type PostProps = {};

export function Post(_props: PostProps) {
    return (
        <Wrapper className="Post-wrapper" data-testid="Post-wrapper">
            Post
        </Wrapper>
    );
}

export default Post;
