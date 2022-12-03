import React from 'react';
import { Wrapper } from './BkBlur.style';

export type BkBlurProps = {
    imageUrl: string;
};

export function BkBlur(props: BkBlurProps) {
    const { imageUrl } = props;

    return (
        <Wrapper
            className='BkGradient-wrapper'
            data-testid='BkGradient-wrapper'
            imageUrl={imageUrl}
        ></Wrapper>
    );
}

export default BkBlur;
