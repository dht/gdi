import React, { FC } from 'react';
import { UnoLayoutFlavour } from '../../types';
import {
    Bottom,
    Center,
    Column,
    Container,
    Top,
    Wrapper,
} from './UnoLayouts.style';

export type UnoLayoutProps = {
    renderSections: (sectionId: string) => JSX.Element[] | JSX.Element | null;
};

export function LayoutBasic(props: UnoLayoutProps) {
    return (
        <Container
            className='Layouts-container'
            data-testid='Layouts-container'
        >
            <Top>
                <Wrapper>{props.renderSections('top')}</Wrapper>
            </Top>
            <Center>{props.renderSections('center')}</Center>
            <Bottom>
                <Wrapper>
                    <Column>{props.renderSections('bottomLeft')}</Column>
                    <Column>{props.renderSections('bottomRight')}</Column>
                </Wrapper>
            </Bottom>
        </Container>
    );
}

export const layouts: Record<UnoLayoutFlavour, FC<UnoLayoutProps>> = {
    app: LayoutBasic,
    template: LayoutBasic,
    blog: LayoutBasic,
    product: LayoutBasic,
};
