import React from 'react';
import { Wrapper } from './IconButton.style';
import { IconButton as IconButtonUI } from '@fluentui/react';

export type IconButtonProps = {
    iconName: string;
    onClick: () => void;
};

export function IconButton(props: IconButtonProps) {
    const { iconName } = props;

    return (
        <Wrapper>
            <IconButtonUI
                className='IconButton-wrapper'
                data-testid='IconButton-wrapper'
                iconProps={{ iconName }}
                onClick={props.onClick}
            />
        </Wrapper>
    );
}

export default IconButton;
