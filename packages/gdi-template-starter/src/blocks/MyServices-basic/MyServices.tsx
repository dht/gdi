import { Icon } from '@gdi/web-ui';
import { useDataset } from '@gdi/engine';
import React, { useContext, useMemo } from 'react';
import {
    Container,
    Description,
    H2,
    Service,
    ServiceDescription,
    ServiceIcon,
    Services,
    ServiceTitle,
    Slogan,
    Wrapper,
} from './MyServices.style';

export const id = 'com.usegdi.templates.starter.myServices-basic';

export type MyServicesProps = {
    strings: MyServicesStrings;
    colors: MyServicesColors;
    extra: MyServicesExtra;
};

export type MyServicesStrings = {
    header: string;
    description?: string;
};

export type MyServicesColors = {};

export type MyServicesExtra = {
    servicesDatasetId: string;
};

export function MyServices(props: MyServicesProps) {
    const { strings, colors, extra } = props;
    const { header, description } = strings;
    const { servicesDatasetId } = extra;

    const services = useDataset(servicesDatasetId);

    function renderService(service: Json) {
        const { iconName, title, description } = service;

        return (
            <Service key={service.id} className='service'>
                <ServiceIcon>
                    <Icon iconName={iconName} />
                </ServiceIcon>

                <ServiceTitle>{title}</ServiceTitle>
                <ServiceDescription>{description}</ServiceDescription>
            </Service>
        );
    }

    function renderServices() {
        return services.map((service: Json) => renderService(service));
    }

    return (
        <Container
            className='MyServices-container'
            data-testid='MyServices-container'
            colors={colors}
        >
            <Wrapper>
                <H2>{header}</H2>
                <Description>{description}</Description>
                <Services>{renderServices()}</Services>
            </Wrapper>
        </Container>
    );
}

export default MyServices;
