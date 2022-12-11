import React, { useCallback, useState } from 'react';
import {
    Actions,
    Content,
    Label,
    P,
    Version,
    Versions,
    Wrapper,
} from './Versioning.style';
import { Button, Slider } from '@gdi/web-base-ui';

export type VersioningProps = {
    values: Json;
    titles: Json;
    ctaButtonText: string;
    cancelText: string;
    onSubmit: (values: Json) => void;
    onCancel: () => void;
};

export function Versioning(props: VersioningProps) {
    const { values = {}, titles = {}, ctaButtonText, cancelText } = props;

    const [balance, { onChange }] = useBalance(values);

    function onClick() {
        props.onSubmit(balance);
    }

    function renderVersion(pageInstanceId: string) {
        const value = balance[pageInstanceId];
        const title = titles[pageInstanceId];

        return (
            <Version key={pageInstanceId} className='version'>
                <Label>{title}</Label>
                <Slider
                    min={0}
                    max={100}
                    value={value}
                    onBlur={() => {}}
                    onChange={(value: number) =>
                        onChange(pageInstanceId, value)
                    }
                    valueFormat={(value: number) => `${value}%`}
                />
            </Version>
        );
    }

    function renderVersions() {
        return Object.keys(values)
            .sort()
            .map((pageInstanceId: string) => renderVersion(pageInstanceId));
    }
    return (
        <Wrapper
            className='Versioning-wrapper'
            data-testid='Versioning-wrapper'
        >
            <Content>
                <P>
                    Select the balance between the different versions of this
                    page:
                </P>
                <Versions>{renderVersions()}</Versions>
            </Content>
            <Actions>
                <Button title={cancelText} onClick={props.onCancel} />
                <Button title={ctaButtonText} primary onClick={onClick} />
            </Actions>
        </Wrapper>
    );
}

export type UseBalanceReturn = [
    Json,
    { onChange: (version: string, value: number) => void }
];

export function useBalance(values: Json): UseBalanceReturn {
    const [balance, setBalance] = useState<Json>(values);

    const onChange = useCallback(
        (version: string, value: number) => {
            const otherKeys = Object.keys(values).filter(
                (key) => key !== version
            );
            const newBalance = { [version]: value };

            let total = value;

            otherKeys.forEach((key) => {
                const value = balance[key];
                const valueMax = Math.min(value, 100 - total);
                const valueMin = Math.max(0, valueMax);
                total += valueMin;
                newBalance[key] = valueMin;
            });

            setBalance(newBalance);
        },
        [balance]
    );

    return [balance, { onChange }];
}

export default Versioning;
