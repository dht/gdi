import React from 'react';
import Breadcrumbs, { IBreadcrumb } from '../Breadcrumbs/Breadcrumbs';
import { Wrapper, Content, BreadcrumbsWrapper } from './Uno.style';
import { IUnoConfig, IUnoSection, Json } from '../../types';
import { layouts } from '../UnoLayouts/UnoLayouts';
import { sortBy } from 'shared-base';
import { UnoSection } from '../UnoSection/UnoSection';
import classnames from 'classnames';

export type UnoProps = {
    config: IUnoConfig;
    data: Json;
    breadcrumbs?: IBreadcrumb[];
};

export function Uno(props: UnoProps) {
    const { config, breadcrumbs = [], data } = props;
    const { layout, sections } = config;
    const { flavour, paletteIndex } = layout;

    function renderSection(section: IUnoSection) {
        const { id } = section;

        return <UnoSection key={id} section={section} data={data} />;
    }

    function renderSections(groupId: string) {
        return sections
            .filter((section) => section.groupId === groupId)
            .sort(sortBy('order'))
            .map((section: IUnoSection) => renderSection(section));
    }

    function renderLayout() {
        const Cmp = layouts[flavour];

        return (
            <Cmp renderSections={renderSections} paletteIndex={paletteIndex} />
        );
    }

    const className = classnames('Uno-wrapper', `palette-${paletteIndex}`);

    return (
        <Wrapper className={className} data-testid='Uno-wrapper'>
            <BreadcrumbsWrapper>
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </BreadcrumbsWrapper>
            <Content>{renderLayout()}</Content>
        </Wrapper>
    );
}

export default Uno;
