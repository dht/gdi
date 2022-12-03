import React from 'react';
import { Wrapper } from './SidePanel.style';

export type SidePanelProps = {
    title?: string;
    onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void;
};

export function SidePanel(props: SidePanelProps) {
    const { title } = props;

    return (
        <Wrapper
            className='SidePanel-wrapper'
            data-testid='SidePanel-wrapper'
            onClick={props.onClick}
        >
            {title}
        </Wrapper>
    );
}

export default SidePanel;
