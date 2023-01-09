import React from 'react';
import { Image, Wrapper } from './Badge.style';

export type BadgeProps = {
    rotation?: number;
};

export function Badge(props: BadgeProps) {
    const { rotation = -10 } = props;

    return (
        <Wrapper
            className='Badge-wrapper'
            data-testid='Badge-wrapper'
            rotation={rotation}
        >
            <Image src='/badge-staff-pick.svg' alt='Staff Pick' />
        </Wrapper>
    );
}

export default Badge;
