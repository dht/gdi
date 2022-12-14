import React, { useContext, useState } from 'react';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import Placeholder from '../Placeholder/Placeholder';
import { ActionType } from '../EngineEdit/EngineEdit';
import { Wrapper, Id, LoaderWrapper, Zoom } from './ElementEdit.style';
import { EngineContext } from '../../context/Engine.context';
import { invokeEvent } from 'shared-base';

export type ElementEditProps = {
    sequence?: number;
    element: IElement;
    isSelected: boolean;
    instanceProps?: Json;
    onSelect: (id: string) => void;
    onAction?: (action: ActionType, id: string) => void;
};

const emptyInstanceProps = {
    strings: {},
    colors: {},
    extra: {},
};

export function ElementEdit(props: ElementEditProps) {
    const {
        element,
        isSelected,
        sequence,
        instanceProps = emptyInstanceProps,
    } = props;
    const [showLoader, setShowLoader] = useState(false);

    const { widgets } = useContext(EngineContext);

    const widget = widgets[element.widgetId];

    function onClick() {
        props.onSelect(element.id);
    }

    function onDblClick() {
        if (!props.onAction) {
            return;
        }

        props.onAction('drillDown', element.id);
    }

    function navigateToZoom() {
        const widgetId = element.widgetId.replace(/\./g, '_');
        invokeEvent('navigate', { path: `/admin/zoomBuild/${widgetId}` });
    }

    function renderWidget() {
        if (!widget) {
            if (element.isPlaceholder) {
                return <Placeholder element={element} />;
            } else {
                return <Error element={element} />;
            }
        }

        const CmpWidget = widget.component;

        if (!CmpWidget) {
            return null;
        }

        return (
            <CmpWidget
                {...instanceProps}
                sequence={sequence}
                isEditMode={true}
            />
        );
    }

    function renderZoom() {
        return <Zoom className='zoom' onClick={navigateToZoom} />;
    }

    function renderId() {
        return <Id className='id'>{element.widgetId}</Id>;
    }

    function renderLoader() {
        if (!showLoader) {
            return null;
        }

        return (
            <LoaderWrapper>
                <Loader />
            </LoaderWrapper>
        );
    }

    return (
        <Wrapper
            className='ElementEdit-wrapper'
            data-testid='ElementEdit-wrapper'
            onMouseDown={onClick}
            onTouchStart={onClick}
            onDoubleClick={onDblClick}
            selected={isSelected}
        >
            {renderWidget()}
            {renderLoader()}
            {renderZoom()}
            {renderId()}
        </Wrapper>
    );
}

export default ElementEdit;
