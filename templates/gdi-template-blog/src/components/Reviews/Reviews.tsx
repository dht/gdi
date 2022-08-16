import React from 'react';
import { Container } from './Reviews.style';

export type ReviewsProps = {};

export function Reviews(_props: ReviewsProps) {
    return (
        <Container className="Reviews-container" data-testid="Reviews-container">
            Reviews
        </Container>
    );
}

export default Reviews;
