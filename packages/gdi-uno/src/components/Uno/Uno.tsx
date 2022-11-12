import React from 'react';
import Breadcrumbs, { IBreadcrumb } from '../Breadcrumbs/Breadcrumbs';
import { Container, Content, Top } from './Uno.style';
import { IUnoConfig, IUnoSection, Json } from '../../types';
import { layouts } from '../UnoLayouts/UnoLayouts';
import { sortBy } from 'shared-base';
import { UnoSection } from '../UnoSection/UnoSection';

export type UnoProps = {
    config: IUnoConfig;
    data: Json;
    breadcrumbs?: IBreadcrumb[];
};

export function Uno(props: UnoProps) {
    const { config, breadcrumbs = [], data } = props;
    const { layout, sections } = config;
    const { flavour } = layout;

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

        return <Cmp renderSections={renderSections} />;
    }

    return (
        <Container className='Uno-container' data-testid='Uno-container'>
            <Top>
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </Top>
            <Content>{renderLayout()}</Content>
        </Container>
    );
}

export default Uno;
