import React from 'react';
import { Button, Container, Icon } from './SocialMenu.style';

export type SocialMenuProps = {
    items: Json[];
};

export function SocialMenu(props: SocialMenuProps) {
    const { items } = props;

    function renderItem(item: Json) {
        const { href, iconName } = item;

        return (
            <Button href={href} target='_blank' key={item.href}>
                <Icon src={iconName} />
            </Button>
        );
    }

    function renderItems() {
        return items.map((item: Json) => renderItem(item));
    }
    return (
        <Container
            className='SocialMenu-container'
            data-testid='SocialMenu-container'
        >
            {renderItems()}
        </Container>
    );
}

export default SocialMenu;
