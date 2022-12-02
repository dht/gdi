import React from 'react';
import { Button, Container, Icon } from './SocialMenu.style';

export type SocialMenuProps = {
    items: Json[];
    onClick: (item: Json) => void;
};

export function SocialMenu(props: SocialMenuProps) {
    const { items } = props;

    function renderItem(item: Json) {
        const { href, iconName } = item;

        return (
            <Button
                key={href}
                onClick={() => props.onClick(item)}
                href={href}
                target='_blank'
            >
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
