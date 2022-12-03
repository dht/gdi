import React from 'react';
import UnoLink from '../UnoLink/UnoLink';
import {
    Wrapper,
    Content,
    Field,
    H2,
    Label,
    Value,
} from './AdditionalInformation.style';
import bytes from 'bytes';
import { useLanguage } from '@gdi/language';

export type AdditionalInformationProps = {
    data: Json;
    section: IUnoSection;
};

export function AdditionalInformation(props: AdditionalInformationProps) {
    const { data } = props;
    const { size, languages, updated, version, links = [] } = data;
    const { d } = useLanguage();

    function renderLink(link: Json) {
        const { id, iconName, title, url } = link;

        return (
            <UnoLink key={id} iconName={iconName} href={url}>
                {title}
            </UnoLink>
        );
    }

    function renderLinks() {
        return links.map((link: Json) => renderLink(link));
    }

    return (
        <Wrapper
            className='AdditionalInformation-wrapper'
            data-testid='AdditionalInformation-wrapper'
        >
            <H2>Additional Information</H2>

            {renderLinks()}

            <Content>
                {version && (
                    <Field>
                        <Label>Version</Label>
                        <Value>{version}</Value>
                    </Field>
                )}
                <Field>
                    <Label>Updated</Label>
                    <Value>{d.dateShort(updated)}</Value>
                </Field>
                {size && (
                    <Field>
                        <Label>Size</Label>
                        <Value>{bytes(size)}</Value>
                    </Field>
                )}
                {languages && (
                    <Field>
                        <Label>Languages</Label>
                        <Value>{languages.join(', ')}</Value>
                    </Field>
                )}
            </Content>
        </Wrapper>
    );
}

export default AdditionalInformation;
