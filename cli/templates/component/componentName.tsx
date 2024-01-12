import React from 'react';
import { Wrapper } from './$CMP.style';

export type $CMPProps = {};

export function $CMP(_props: $CMPProps) {
    return (
        <Wrapper className="$CMP-wrapper" data-testid="$CMP-wrapper">
            $CMP
        </Wrapper>
    );
}

export default $CMP;
