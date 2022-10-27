import React from 'react';
import { Container } from './ItemCoupon.style';

export type ItemCouponProps = {};

export function ItemCoupon(_props: ItemCouponProps) {
    return (
        <Container className="ItemCoupon-container" data-testid="ItemCoupon-container">
            ItemCoupon
        </Container>
    );
}

export default ItemCoupon;
