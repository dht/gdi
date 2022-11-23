import { Icon } from '@fluentui/react';
import React from 'react';
import {
    Container,
    Wrapper,
    H2,
    Description,
    Resume,
    ResumeColumn,
    ResumeTitle,
    ResumeTitleText,
    Items,
    Item,
    JobTitle,
    JobCompany,
    Period,
    Year,
    Dash,
    Row,
    IconWrapper,
} from './MyResume.style';

export const id = 'com.usegdi.templates.starter.myResume-basic';

export type MyResumeProps = {
    strings: MyResumeStrings;
    colors: MyResumeColors;
    extra: MyResumeExtra;
};

export type MyResumeStrings = {
    header: string;
    description?: string;
};

export type MyResumeColors = {};

export type MyResumeExtra = {
    servicesDatasetId?: string;
};

export function MyResume(props: MyResumeProps) {
    const { strings, colors, extra } = props;
    const { header, description } = strings;
    const { servicesDatasetId } = extra;

    const educationItems = items.filter((i) => i.type === 'education');
    const experienceItems = items.filter((i) => i.type === 'experience');

    function renderItem(item: Json) {
        const { yearStart, yearEnd, jobTitle, company, description } = item;
        return (
            <Item key={item.id} className='item'>
                <Row>
                    <JobCompany>{company}</JobCompany>
                    <Period>
                        <Year>{yearStart}</Year>
                        <Dash>-</Dash>
                        <Year>{yearEnd}</Year>
                    </Period>
                </Row>
                <JobTitle>{jobTitle}</JobTitle>
                <Description>{description}</Description>
            </Item>
        );
    }

    function renderItems(items: Json[]) {
        return items.map((item: Json) => renderItem(item));
    }

    return (
        <Container
            className='MyResume-container'
            data-testid='MyResume-container'
            colors={colors}
        >
            <Wrapper>
                <H2>My Resume</H2>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus molestie, justo nec convallis sollicitudin.
                </Description>
                <Resume>
                    <ResumeColumn>
                        <ResumeTitle>
                            <ResumeTitleText>Resume</ResumeTitleText>
                            <IconWrapper>
                                <Icon iconName='Trophy' />
                            </IconWrapper>
                        </ResumeTitle>
                        <Items>{renderItems(educationItems)}</Items>
                    </ResumeColumn>
                    <ResumeColumn>
                        <ResumeTitle>
                            <ResumeTitleText>Job Experience</ResumeTitleText>
                            <IconWrapper>
                                <Icon iconName='Work' />
                            </IconWrapper>
                        </ResumeTitle>
                        <Items>{renderItems(experienceItems)}</Items>
                    </ResumeColumn>
                </Resume>
            </Wrapper>
        </Container>
    );
}

const items = [
    {
        id: '1',
        yearStart: '2010',
        yearEnd: '2012',
        jobTitle: 'Web Developer',
        company: 'Google',
        type: 'education',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin, lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin',
    },
    {
        id: '2',
        yearStart: '2010',
        yearEnd: '2012',
        jobTitle: 'Web Developer',
        company: 'Google',
        type: 'education',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin, lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin',
    },
    {
        id: '3',
        yearStart: '2010',
        yearEnd: '2012',
        jobTitle: 'Web Developer',
        company: 'Google',
        type: 'education',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin, lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin',
    },
    {
        id: '4',
        yearStart: '2010',
        yearEnd: '2012',
        jobTitle: 'Web Developer',
        company: 'Google',
        type: 'experience',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin, lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin',
    },
    {
        id: '5',
        yearStart: '2010',
        yearEnd: '2012',
        jobTitle: 'Web Developer',
        company: 'Google',
        type: 'experience',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin, lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin',
    },
    {
        id: '6',
        yearStart: '2010',
        yearEnd: '2012',
        jobTitle: 'Web Developer',
        company: 'Google',
        type: 'experience',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin, lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin',
    },
];
export default MyResume;
