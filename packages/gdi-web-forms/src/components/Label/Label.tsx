import React from 'react';
import { LabelSize } from '../../types';
import LabelFloating from '../LabelFloating/LabelFloating';
import {
    Asterisk,
    Wrapper,
    Error,
    LabelParagraph,
    LabelValue,
    Row,
} from './Label.style';

export type LabelProps = {
    value?: string;
    description?: string;
    errorMessage?: string;
    isRequired?: boolean;
    size?: LabelSize;
    t?: (key: string) => string;
};

export function Label(props: LabelProps) {
    const {
        value,
        isRequired,
        description,
        errorMessage,
        size = 'base',
    } = props;

    if (size === 'compact') {
        return <LabelFloating {...props} />;
    }

    function renderTopRow() {
        if (!value) {
            return null;
        }

        return (
            <Row>
                <LabelValue>{value}</LabelValue>
                {isRequired && <Asterisk>*</Asterisk>}
                {errorMessage && (
                    <Error className='form-error-label'>{errorMessage}</Error>
                )}
            </Row>
        );
    }

    function renderDescription() {
        if (!description) {
            return null;
        }

        return <LabelParagraph>{description}</LabelParagraph>;
    }

    return (
        <Wrapper className='Label-wrapper' data-testid='Label-wrapper'>
            {renderTopRow()}
            {renderDescription()}
        </Wrapper>
    );
}

export default Label;
