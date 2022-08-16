import React from 'react';
import { Container } from './Comments.style';

export type CommentsProps = {};

export function Comments(_props: CommentsProps) {
    return (
        <Container
            className='Comments-container'
            data-testid='Comments-container'
        >
            Comments
        </Container>
    );
}

export default Comments;
