import { Icon } from '@gdi/web-ui';
import React from 'react';
import {
    Container,
    Wrapper,
    H2,
    Description,
    ResumeRow,
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
    const { strings, colors, extra } = props;
    const { header, description } = strings;
    const { resumeDatasetId } = extra;

    const items = useDataset(resumeDatasetId);

    const educationItems = items.filter((i: Json) => i.type === 'education');
    const experienceItems = items.filter((i: Json) => i.type === 'experience');

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
                <JobDescription>{description}</JobDescription>
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
                <H2>{header}</H2>
                <Description>{description}</Description>
                <ResumeRow>
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
                </ResumeRow>
            </Wrapper>
        </Container>
    );
}

export default MyResume;
