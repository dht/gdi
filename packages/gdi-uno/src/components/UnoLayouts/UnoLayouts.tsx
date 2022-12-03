import { TrianglesBk } from '@gdi/web-ui';
import React, { FC } from 'react';
import { UnoLayoutFlavour } from '../../types';
import {
    Bottom,
    Center,
    Column,
    Wrapper,
    Top,
    Container,
    Row,
} from './UnoLayouts.style';

export type UnoLayoutProps = {
    renderSections: (sectionId: string) => JSX.Element[] | JSX.Element | null;
    paletteIndex?: number;
};

export function LayoutBasic(props: UnoLayoutProps) {
    const { paletteIndex } = props;

    return (
        <Wrapper className='Layouts-wrapper' data-testid='Layouts-wrapper'>
            <Top>
                <TrianglesBk paletteIndex={paletteIndex}>
                    <Container align='center' flex={1}>
                        {props.renderSections('top')}
                    </Container>
                </TrianglesBk>
            </Top>
            <Center color='#223'>{props.renderSections('center')}</Center>
            <Bottom>
                <Wrapper>
                    <Column>{props.renderSections('bottomLeft')}</Column>
                    <Column>{props.renderSections('bottomRight')}</Column>
                </Wrapper>
            </Bottom>
        </Wrapper>
    );
}

export function LayoutBlog(props: UnoLayoutProps) {
    return (
        <Wrapper className='Layouts-wrapper' data-testid='Layouts-wrapper'>
            <Top>
                <Wrapper>{props.renderSections('top')}</Wrapper>
            </Top>
            <Center>
                <Container>
                    <Row>
                        <Column flex={5}>
                            {props.renderSections('centerLeft')}
                        </Column>
                        <Column flex={2}>
                            {props.renderSections('centerRight')}
                        </Column>
                    </Row>
                </Container>
            </Center>
            <Bottom>
                <Container>
                    <Row>
                        <Column flex={5}>
                            {props.renderSections('bottomLeft')}
                        </Column>
                        <Column flex={2}>
                            {props.renderSections('bottomRight')}
                        </Column>
                    </Row>
                </Container>
            </Bottom>
        </Wrapper>
    );
}

export const layouts: Record<UnoLayoutFlavour, FC<UnoLayoutProps>> = {
    app: LayoutBasic,
    template: LayoutBasic,
    blog: LayoutBlog,
    product: LayoutBasic,
};
