import React from 'react';
import { Icon, Tags } from '@gdi/web-base-ui';
import {
    IImage,
    IOverlayConfig,
    IOverlayField,
    RenderOptions,
} from '../../types';
import {
    Container,
    Group,
    Groups,
    Row,
    Selected,
} from './GenericOverlay.style';
import classnames from 'classnames';
import OverlayField from '../OverlayField/OverlayField';
import { filter } from 'lodash';

export type GenericOverlayProps = {
    isSelected?: boolean;
    item: Json;
    viewMode: 'full' | 'minimal';
    options?: RenderOptions;
    config: IOverlayConfig;
};

export function GenericOverlay(props: GenericOverlayProps) {
    const { item, isSelected, config } = props;
    const { fields = [], paddingBottom } = config;

    const className = classnames(
        'GenericOverlay-container',
        `item-${item.id}`,
        {
            selected: isSelected,
        }
    );

    const style: React.CSSProperties = {};

    if (paddingBottom) {
        style.paddingBottom = paddingBottom + '%';
    }

    function renderField(field: IOverlayField) {
        return <OverlayField key={field.id} field={field} item={item} />;
    }

    function renderFields(locationKey: string) {
        return (fields as IOverlayField[])
            .filter((field) => field.locationKey === locationKey)
            .map((field) => renderField(field));
    }

    return (
        <Container
            className={className}
            style={style}
            data-testid='GenericOverlay-container'
        >
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

            {isSelected && (
                <Selected>
                    <Icon iconName='StatusCircleCheckmark' />
                </Selected>
            )}
        </Container>
    );
}

export default GenericOverlay;
