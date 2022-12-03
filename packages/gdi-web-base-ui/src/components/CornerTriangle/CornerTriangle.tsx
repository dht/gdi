import { Icon } from '@fluentui/react';
import React from 'react';
import { Wrapper } from './CornerTriangle.style';
import classnames from 'classnames';

export type CornerTriangleProps = {
    color: string;
    iconName: string;
};

export function CornerTriangle(props: CornerTriangleProps) {
    const { color, iconName } = props;

    const className = classnames('CornerTriangle-wrapper', color);

    return (
        <Wrapper className={className} data-testid='CornerTriangle-wrapper'>
            <Icon iconName={iconName} />
        </Wrapper>
    );
}

export default CornerTriangle;
