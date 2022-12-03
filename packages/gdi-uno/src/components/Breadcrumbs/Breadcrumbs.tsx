import React from 'react';
import { Breadcrumb, Container } from './Breadcrumbs.style';

export type IBreadcrumb = {
    id: string;
    title: string;
    link?: string;
};

export type BreadcrumbsProps = {
    breadcrumbs: IBreadcrumb[];
};

export function Breadcrumbs(props: BreadcrumbsProps) {
    const { breadcrumbs = [] } = props;

    function renderBreadcrumb(breadcrumb: IBreadcrumb) {
        return (
            <Breadcrumb key={breadcrumb.id} className='breadcrumb'>
                {breadcrumb.title}
            </Breadcrumb>
        );
    }

    function renderBreadcrumbs() {
        return breadcrumbs.map((breadcrumb: IBreadcrumb) =>
            renderBreadcrumb(breadcrumb)
        );
    }

    return (
        <Wrapper
            className='Breadcrumbs-wrapper'
            data-testid='Breadcrumbs-wrapper'
        >
            {renderBreadcrumbs()}
        </Wrapper>
    );
}

export default Breadcrumbs;
