import React from 'react';
import { Container } from './SidePanel.style';

export type SidePanelProps = {
    title?: string;
    onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void;
};

export function SidePanel(props: SidePanelProps) {
    const { title } = props;

    return (
        <Container
            className="SidePanel-container"
            data-testid="SidePanel-container"
            onClick={props.onClick}
        >
            {title}
        </Container>
    );
}

export default SidePanel;
