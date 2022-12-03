import React, { useContext, useEffect } from 'react';
import { Icon } from '@gdi/web-base-ui';
import { IGalleryOptions, IOverlayConfig, IOverlayField } from '../../types';
import { Wrapper, Group, Groups, Row, Selected } from './GenericOverlay.style';
import classnames from 'classnames';
import OverlayField from '../OverlayField/OverlayField';
import { GalleryContext } from '../../context/Gallery.context';

export type GenericOverlayProps = {
    config: IOverlayConfig;
    options?: IGalleryOptions;
    item: Json;
    isSelected?: boolean;
};

export function GenericOverlay(props: GenericOverlayProps) {
    const { item, isSelected, options, config } = props;
    const { fields = [], paddingBottom, margin = '5px' } = config;
    const { hideOverlay } = options ?? {};

    const context = useContext(GalleryContext);

    const className = classnames('GenericOverlay-wrapper', `item-${item.id}`, {
        selected: isSelected,
    });

    const style: React.CSSProperties = {
        margin: margin ?? 0,
    };

    if (paddingBottom) {
        style.paddingBottom = paddingBottom + '%';
    }

    function renderField(field: IOverlayField) {
        return (
            <OverlayField
                key={field.id}
                field={field}
                item={item}
                onAction={context.callbacks.onAction}
            />
        );
    }

    function renderFields(locationKey: string) {
        return (fields as IOverlayField[])
            .filter((field) => field.locationKey === locationKey)
            .map((field) => renderField(field));
    }

    function renderGroups() {
        if (hideOverlay) {
            return null;
        }

        return (
            <Groups>
                <Row>
                    <Group>{renderFields('topLeft')}</Group>
                    <Group>{renderFields('topRight')}</Group>
                </Row>
                <Row>
                    <Group>{renderFields('bottomLeft')}</Group>
                    <Group>{renderFields('bottomRight')}</Group>
                </Row>
            </Groups>
        );
    }

    return (
        <Wrapper
            className={className}
            style={style}
            data-testid='GenericOverlay-wrapper'
        >
            {renderGroups()}
            {isSelected && (
                <Selected>
                    <Icon iconName='StatusCircleCheckmark' />
                </Selected>
            )}
        </Wrapper>
    );
}

export default GenericOverlay;
