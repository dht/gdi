import React, { useMemo, useRef, useState } from 'react';
import {
    Actions,
    Wrapper,
    Content,
    ErrorMessage,
    ErrorWrapper,
} from './FlexProperties.style';
import { Code } from '@gdi/web-ui';
import { Button, Pivot, PivotItem } from '@gdi/web-ui';
import { useEnter } from '@gdi/hooks';
import { isEqual } from 'shared-base';
import { useToggle } from 'react-use';

export type FlexPropertiesProps = {
    flexEntity?: IFlexEntity;
    callbacks: {
        onClose: () => void;
        onStyleSave: (data: Json) => void;
        onPropsSave: (data: Json) => void;
    };
};

export function FlexProperties(props: FlexPropertiesProps) {
    const { flexEntity, callbacks } = props;
    const { style: flexStyle = {}, props: flexProps = {} } = flexEntity ?? {};

    const [styleText, setStyleText] = useState(JSON.stringify(flexStyle, null, 4)); // prettier-ignore
    const [propsText, setPropsText] = useState(JSON.stringify(flexProps, null, 4)); // prettier-ignore

    const [showError, toggleError] = useToggle(false);
    const [selectedTab, setSelectedTab] = useState('style');

    function validateJson(jsonText: string) {
        try {
            JSON.parse(jsonText);
            return true;
        } catch (_err) {
            return false;
        }
    }

    function validate() {
        toggleError(false);

        const isStyleValid = validateJson(styleText);

        if (!isStyleValid) {
            setSelectedTab('style');
            toggleError(true);
            return false;
        }

        const isPropsValid = validateJson(propsText);

        if (!isPropsValid) {
            setSelectedTab('props');
            toggleError(true);
            return false;
        }

        return true;
    }

    function onSubmit() {
        const isValid = validate();

        if (!isValid) {
            return;
        }

        const newFlexStyle = JSON.parse(styleText);
        const newFlexProps = JSON.parse(propsText);

        const changeInStyle = !isEqual(newFlexStyle, flexStyle);
        const changeInProps = !isEqual(newFlexProps, flexProps);

        if (changeInStyle) {
            callbacks.onStyleSave(newFlexStyle);
        }

        if (changeInProps) {
            callbacks.onPropsSave(newFlexProps);
        }

        callbacks.onClose();
    }

    useEnter((shortKey) => {
        if (shortKey.withAlt) {
            onSubmit();
        }
    });

    return (
        <Wrapper
            className='FlexProperties-wrapper'
            data-testid='FlexProperties-wrapper'
        >
            <Pivot
                aria-label='Basic Pivot'
                selectedKey={selectedTab}
                onLinkClick={(item: any) => setSelectedTab(item.props.itemKey)}
            >
                <PivotItem headerText='Style' itemKey='style'>
                    <Content>
                        <Code
                            height={540}
                            value={styleText}
                            language='json'
                            onChange={setStyleText}
                        />
                    </Content>
                </PivotItem>
                <PivotItem headerText='Props' itemKey='props'>
                    <Content>
                        <Code
                            height={540}
                            value={propsText}
                            language='json'
                            onChange={setPropsText}
                        />
                    </Content>
                </PivotItem>
            </Pivot>
            <Actions>
                <ErrorWrapper>
                    {showError && (
                        <ErrorMessage>
                            Does not appear to be a valid JSON, please fix its
                            content
                        </ErrorMessage>
                    )}
                </ErrorWrapper>
                <Button title='Cancel' onClick={callbacks.onClose} />
                <Button title='Save (⌥⏎)' primary onClick={onSubmit} />
            </Actions>
        </Wrapper>
    );
}

export default FlexProperties;
