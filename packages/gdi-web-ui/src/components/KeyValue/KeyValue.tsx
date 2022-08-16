import React from 'react';
import { Container, Key, Pair, Value } from './KeyValue.style';

export type KeyValueProps = {
    data: Json;
    customFields?: string[];
    renderCustomField?: (fieldName: string, value: any) => JSX.Element;
    flex?: number[];
};

export function KeyValue(props: KeyValueProps) {
    const { data, customFields = [], flex = [1, 2] } = props;

    function renderField(field: string) {
        let value: string | JSX.Element =
            typeof data[field] === 'string'
                ? data[field]
                : JSON.stringify(data[field]);

        if (customFields.includes(field) && props.renderCustomField) {
            value = props.renderCustomField(field, data[field]);
        }

        if (!value && value !== 'false') {
            return null;
        }

        return (
            <Pair key={field} className='field'>
                <Key style={{ flex: flex[0] }}>{field}</Key>
                <Value style={{ flex: flex[1] }}>{value}</Value>
            </Pair>
        );
    }

    function renderFields() {
        return Object.keys(data).map((field: string) => renderField(field));
    }

    return (
        <Container
            className='KeyValue-container'
            data-testid='KeyValue-container'
        >
            {renderFields()}
        </Container>
    );
}

export default KeyValue;
