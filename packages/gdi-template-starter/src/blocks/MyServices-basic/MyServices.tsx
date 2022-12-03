import React from 'react';
import { Icon } from '@gdi/web-ui';
import { useDataset } from '@gdi/engine';
import {
    Column,
    Container,
    Description,
    H2,
    Row,
    ServiceDescription,
    ServiceIcon,
    ServiceTitle,
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
            <Column key={service.id} className='service'>
                <ServiceIcon>
                    <Icon iconName={iconName} />
                </ServiceIcon>
                <ServiceTitle>{title}</ServiceTitle>
                <ServiceDescription>{description}</ServiceDescription>
            </Column>
        );
    }

    function renderServices() {
        return services.map((service: Json) => renderService(service));
    }

    return (
        <Wrapper
            className='MyServices-container'
            data-testid='MyServices-container'
            colors={colors}
        >
            <Container>
                <H2>{header}</H2>
                <Description>{description}</Description>
                <Row>{renderServices()}</Row>
            </Container>
        </Wrapper>
    );
}

export default MyServices;
