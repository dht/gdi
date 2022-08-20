import React, { FC, RefObject, useRef } from 'react';
import { useMount } from 'react-use';
import { IFormLayoutGroup, LayoutFlavour } from '../../types';
import { Column, Container } from './Layouts.style';

export type LayoutProps = {
    groups: IFormLayoutGroup[];
    width?: number;
    padding?: number;
    flex?: number[];
    renderGroup: (groupId: string, index: number) => JSX.Element | null;
};

export function LayoutSingleColumn(props: LayoutProps) {
    const { groups, width, padding = 10 } = props;

    function renderColumn(columnIndex: number) {
        const style = {
            paddingLeft: `${padding}px`,
            paddingRight: `${padding}px`,
        };

        return (
            <Column key={columnIndex} style={style}>
                {groups
                    .filter((group) => group.layoutColumnIndex === columnIndex)
                    .map((group, index) => props.renderGroup(group.id, index))}
            </Column>
        );
    }

    return (
        <Container
            className='Layouts-container'
            data-testid='Layouts-container'
            width={width}
        >
            {renderColumn(0)}
        </Container>
    );
}

export function LayoutTwoColumns(props: LayoutProps) {
    const { groups, width, flex = [], padding = 10 } = props;

    function renderColumn(columnIndex: number) {
        const style = {
            paddingLeft: `${padding}px`,
            paddingRight: `${padding}px`,
        };

        return (
            <Column flex={flex[columnIndex]} key={columnIndex} style={style}>
                {groups
                    .filter((group) => group.layoutColumnIndex === columnIndex)
                    .map((group, index) => props.renderGroup(group.id, index))}
            </Column>
        );
    }

    return (
        <Container
            className='Layouts-container'
            data-testid='Layouts-container'
            width={width}
        >
            {renderColumn(0)}
            {renderColumn(1)}
        </Container>
    );
}

export function LayoutThreeColumns(props: LayoutProps) {
    const { groups, width, flex = [], padding = 10 } = props;

    function renderColumn(columnIndex: number) {
        const style = {
            paddingLeft: `${padding}px`,
            paddingRight: `${padding}px`,
        };

        return (
            <Column flex={flex[columnIndex]} key={columnIndex} style={style}>
                {groups
                    .filter((group) => group.layoutColumnIndex === columnIndex)
                    .map((group, index) => props.renderGroup(group.id, index))}
            </Column>
        );
    }

    return (
        <Container
            className='Layouts-container'
            data-testid='Layouts-container'
            width={width}
        >
            {renderColumn(0)}
            {renderColumn(1)}
            {renderColumn(2)}
        </Container>
    );
}

export const layouts: Record<LayoutFlavour, FC<LayoutProps>> = {
    singleColumn: LayoutSingleColumn,
    twoColumns: LayoutTwoColumns,
    threeColumns: LayoutThreeColumns,
};
