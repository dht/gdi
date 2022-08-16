import React from 'react';
import { LabelSize } from '../../types';
import {
    Asterisk,
    Container,
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
        <Container
            className='LabelFloating-container'
            data-testid='LabelFloating-container'
        >
            {renderTopRow()}
            {renderDescription()}
        </Container>
    );
}

export default LabelFloating;
