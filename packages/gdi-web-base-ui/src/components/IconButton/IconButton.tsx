import React from 'react';
import { Container } from './IconButton.style';
import { IconButton as IconButtonUI } from '@fluentui/react';

export type IconButtonProps = {
    iconName: string;
    onClick: () => void;
};

export function IconButton(props: IconButtonProps) {
    const { iconName } = props;

    return (
        <Container>
            <IconButtonUI
                className='IconButton-container'
                data-testid='IconButton-container'
                iconProps={{ iconName }}
                onClick={props.onClick}
            />
        </Container>
    );
}

export default IconButton;
