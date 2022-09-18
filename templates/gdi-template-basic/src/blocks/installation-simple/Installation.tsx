import React from 'react';
import {
    Container,
    MoreInstructions,
    Details,
    Text,
    Wrapper,
    Link,
} from './Installation.style';

export const id = 'com.usegdi.templates.basic.installation-simple';

export type InstallationProps = {
    sequence?: number;
    strings: InstallationStrings;
    colors: InstallationColors;
    extra: InstallationExtra;
};

export type InstallationStrings = {
    command: string;
    nextStage: string;
    nextStageLink: string;
};

export type InstallationColors = {
    background?: string;
    text?: string;
};

export type InstallationExtra = {
    hrefNextStage: string;
};

export function Installation(props: InstallationProps) {
    const { strings, colors, extra } = props;
    const { command, nextStage, nextStageLink } = strings;
    const { hrefNextStage = '#' } = extra;

    return (
        <Container
            className='Installation-container'
            data-testid='Installation-container'
            colors={colors}
        >
            <Wrapper>
                <Details>
                    <Text>{command}</Text>
                </Details>

                <MoreInstructions>
                    {nextStage}
                    <Link href={hrefNextStage}>{nextStageLink}</Link>
                </MoreInstructions>
            </Wrapper>
        </Container>
    );
}

export default Installation;
