import { Icon } from '@fluentui/react';
import React from 'react';
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
    servicesDatasetId: string;
};

export type MyServicesColors = {};

export type MyServicesExtra = {};

export function MyServices(props: MyServicesProps) {
    const { strings, colors } = props;
    const { header, description } = strings;

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
                <H2>My Services</H2>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus molestie, justo nec convallis sollicitudin.
                </Description>
                <Services>{renderServices()}</Services>
            </Wrapper>
        </Container>
    );
}

const services = [
    {
        id: '1',
        title: 'Responsive',
        iconName: 'Edit',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin.',
    },
    {
        id: '2',
        title: 'Responsive',
        iconName: 'Edit',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin.',
    },
    {
        id: '3',
        title: 'Responsive',
        iconName: 'Edit',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin.',
    },
];

export default MyServices;
