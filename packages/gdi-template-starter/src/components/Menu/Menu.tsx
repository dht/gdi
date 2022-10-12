import React from 'react';
import { Container } from './Menu.style';

export type MenuProps = {
    title?: string;
    onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void;
};

export function Menu(props: MenuProps) {
    const { title } = props;

    return (
        <Container
            className="Menu-container"
            data-testid="Menu-container"
            onClick={props.onClick}
        >
            {title}
        </Container>
    );
}

export default Menu;
