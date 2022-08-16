import { Icon } from '@gdi/web-ui';
import React from 'react';
import { Container } from './Pages.style';

export type PagesProps = {
    onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void;
};

export function Pages(props: PagesProps) {
    return (
        <Container
            className='Pages-container'
            data-testid='Pages-container'
            onClick={props.onClick}
        >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            {/* <Icon iconName='Home' />
            <Icon iconName='FavoriteStar' />
            <Icon iconName='Money' />
            <Icon iconName='Phone' /> */}
        </Container>
    );
}

export default Pages;
