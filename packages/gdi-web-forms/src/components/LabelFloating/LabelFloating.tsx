import React from 'react';
import { LabelSize } from '../../types';
import {
    Asterisk,
    Wrapper,
    Error,
    LabelParagraph,
    LabelValue,
    Row,
} from './LabelFloating.style';

export type LabelFloatingProps = {
    value?: string;
    description?: string;
    errorMessage?: string;
    isRequired?: boolean;
    size?: LabelSize;
    t?: (key: string) => string;
};

export function LabelFloating(props: LabelFloatingProps) {
    const {
        value,
        isRequired,
        description,
        errorMessage,
        size = 'base',
    } = props;

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
        <Wrapper
            className='LabelFloating-wrapper'
            data-testid='LabelFloating-wrapper'
        >
            {renderTopRow()}
            {renderDescription()}
        </Wrapper>
    );
}

export default LabelFloating;
