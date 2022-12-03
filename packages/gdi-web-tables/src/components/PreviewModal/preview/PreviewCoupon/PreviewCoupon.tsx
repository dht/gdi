import React from 'react';
import { Wrapper } from './PreviewCoupon.style';

export type PreviewCouponProps = {};

export function PreviewCoupon(_props: PreviewCouponProps) {
    return (
        <Wrapper
            className='PreviewCoupon-wrapper'
            data-testid='PreviewCoupon-wrapper'
        >
            PreviewCoupon
        </Wrapper>
    );
}

export default PreviewCoupon;
