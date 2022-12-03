import { Icon } from '@gdi/web-ui';
import React from 'react';
import {
    Container,
    Wrapper,
    H2,
    Description,
    Row,
    Column,
    ResumeTitle,
    ResumeTitleText,
    Items,
    Item,
    JobTitle,
    JobCompany,
    Period,
    Year,
    Dash,
    LineRow,
    IconWrapper,
    JobDescription,
} from './MyResume.style';
import { useDataset } from '@gdi/engine';

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
    resumeDatasetId?: string;
};

export function MyResume(props: MyResumeProps) {
    const { strings, extra } = props;
    const { header, description } = strings;
    const { resumeDatasetId } = extra;

    const items = useDataset(resumeDatasetId ?? '');

    const educationItems = items.filter((i: Json) => i.type === 'education');
    const experienceItems = items.filter((i: Json) => i.type === 'experience');

    function renderItem(item: Json) {
        const { yearStart, yearEnd, jobTitle, company, description } = item;

        return (
            <Item key={item.id} className='item'>
                <LineRow>
                    <JobCompany>{company}</JobCompany>
                    <Period>
                        <Year>{yearStart}</Year>
                        <Dash>-</Dash>
                        <Year>{yearEnd}</Year>
                    </Period>
                </LineRow>
                <JobTitle>{jobTitle}</JobTitle>
                <JobDescription>{description}</JobDescription>
            </Item>
        );
    }

    function renderItems(items: Json[]) {
        return items.map((item: Json) => renderItem(item));
    }

    return (
        <Wrapper
            className='MyResume-container'
            data-testid='MyResume-container'
        >
            <Container>
                <H2>{header}</H2>
                <Description>{description}</Description>
                <Row>
                    <Column>
                        <ResumeTitle>
                            <ResumeTitleText>Resume</ResumeTitleText>
                            <IconWrapper>
                                <Icon iconName='Trophy' />
                            </IconWrapper>
                        </ResumeTitle>
                        <Items>{renderItems(educationItems)}</Items>
                    </Column>
                    <Column>
                        <ResumeTitle>
                            <ResumeTitleText>Job Experience</ResumeTitleText>
                            <IconWrapper>
                                <Icon iconName='Work' />
                            </IconWrapper>
                        </ResumeTitle>
                        <Items>{renderItems(experienceItems)}</Items>
                    </Column>
                </Row>
            </Container>
        </Wrapper>
    );
}

export default MyResume;
