import { Icon } from '@fluentui/react';
import React from 'react';
import { Container } from './CornerTriangle.style';
import classnames from 'classnames';

export type CornerTriangleProps = {
    color: string;
    iconName: string;
};

export function CornerTriangle(props: CornerTriangleProps) {
    const { color, iconName } = props;

    const className = classnames('CornerTriangle-container', color);

    return (
        <Container className={className} data-testid='CornerTriangle-container'>
            <Icon iconName={iconName} />
        </Container>
    );
}

export default CornerTriangle;
