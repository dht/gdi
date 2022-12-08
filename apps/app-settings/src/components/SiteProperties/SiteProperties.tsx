import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
    Actions,
    Wrapper,
    Editors,
    Error,
    H1,
    Header,
} from './SiteProperties.style';
import { reference } from './SiteProperties.reference';
import { Button, Code, toast } from '@gdi/web-ui';
import { useMeasure } from 'react-use';
import { sitePropertiesSchema } from './SiteProperties.schema';

export type SitePropertiesProps = {
    siteProperties: Json;
    onSave: (value: Json) => void;
    onDownload: (value: Json) => void;
};

export function SiteProperties(props: SitePropertiesProps) {
    const { siteProperties } = props;
    const [ref, { height }] = useMeasure<HTMLDivElement>();
    const [error, setError] = useState<string | undefined>(undefined);

    const trimmed = useMemo(() => {
        const trimmedValue = { ...siteProperties };
        delete trimmedValue['id'];
        delete trimmedValue['stateKey'];
        delete trimmedValue['_modifiedDate'];
        return JSON.stringify(trimmedValue, null, 4);
    }, [siteProperties]);

    const [value, setValue] = useState<string>(trimmed);

    useEffect(() => {
        setValue(trimmed);
    }, [trimmed]);

    const validate = useCallback(() => {
        try {
            return JSON.parse(value);
        } catch (err) {
            const errorMessage = 'Not a valid JSON';
            setError(errorMessage);
            toast.show(errorMessage, 'error');
            return;
        }
    }, [value]);

    const onSave = useCallback(() => {
        const parsed = validate();
        props.onSave(parsed);
        toast.show('Site properties saved');
    }, [value]);

    const onDownload = useCallback(() => {
        const parsed = validate();
        props.onDownload(parsed);
    }, [value]);

    return (
        <Wrapper
            className='SiteProperties-wrapper'
            data-testid='SiteProperties-wrapper'
            ref={ref}
        >
            <Header>
                <H1>Site Properties</H1>
                {error && <Error>{error}</Error>}
                <Actions>
                    <Button iconName='Download' onClick={onDownload} />
                    <Button title='Save' primary onClick={onSave} />
                </Actions>
            </Header>
            <Editors>
                <Code
                    value={value}
                    height={height}
                    language='json'
                    onChange={(value) => setValue(value ?? '')}
                    schema={sitePropertiesSchema}
                />
                <Code
                    value={JSON.stringify(reference, null, 4)}
                    height={height}
                    language='json'
                    readOnly
                />
            </Editors>
        </Wrapper>
    );
}

export default SiteProperties;
