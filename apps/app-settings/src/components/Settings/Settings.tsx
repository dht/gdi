import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Actions, Wrapper, Editors, Error, H1, Header } from './Settings.style';
import { reference } from './Settings.reference';
import { Button, Code, toast } from '@gdi/web-ui';
import { useMeasure } from 'react-use';
import { settingsSchema } from './Settings.schema';

export type SettingsProps = {
    settings: Json;
    onSave: (value: Json) => void;
    onDownload: (value: Json) => void;
};

export function Settings(props: SettingsProps) {
    const { settings } = props;
    const [ref, { height }] = useMeasure<HTMLDivElement>();
    const [error, setError] = useState<string | undefined>(undefined);

    const trimmed = useMemo(() => {
        const trimmedSettings = { ...settings };
        delete trimmedSettings['id'];
        delete trimmedSettings['stateKey'];
        delete trimmedSettings['_modifiedDate'];
        return JSON.stringify(trimmedSettings, null, 4);
    }, [settings]);

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
        toast.show('Settings saved');
    }, [value]);

    const onDownload = useCallback(() => {
        const parsed = validate();
        props.onDownload(parsed);
    }, [value]);

    return (
        <Wrapper
            className='Settings-wrapper'
            data-testid='Settings-wrapper'
            ref={ref}
        >
            <Header>
                <H1>Settings</H1>
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
                    schema={settingsSchema}
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

export default Settings;
