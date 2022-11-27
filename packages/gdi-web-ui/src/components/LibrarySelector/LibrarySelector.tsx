import React from 'react';
import { Switch } from '@gdi/web-base-ui';
import { Container } from './LibrarySelector.style';

export type LibrarySelectorProps = {
    value: string;
    onChange: (optionId: string) => void;
};

export function LibrarySelector(props: LibrarySelectorProps) {
    const { value } = props;

    return (
        <Container
            className='LibrarySelector-container'
            data-testid='LibrarySelector-container'
        >
            <Switch
                value={value}
                onChange={(options) => props.onChange(options.id)}
                options={switchItems}
            />
        </Container>
    );
}

const switchItems: IOptions = [
    {
        id: 'images',
        iconName: 'image',
        hint: 'Images',
        text: '',
    },
    {
        id: 'widgets',
        iconName: 'widgets',
        hint: 'Widgets',
        text: '',
    },
];

export default LibrarySelector;
