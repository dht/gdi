import React from 'react';
import { Container } from './PreviewCoupon.style';

export type PreviewCouponProps = {};

export function PreviewCoupon(_props: PreviewCouponProps) {
    return (
        <Container className="PreviewCoupon-container" data-testid="PreviewCoupon-container">
            PreviewCoupon
        </Container>
    );
}

export default PreviewCoupon;
