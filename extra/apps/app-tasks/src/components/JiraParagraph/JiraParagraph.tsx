import React from 'react';
import { Wrapper, Paragraph, Text } from './JiraParagraph.style';

export interface Description {
    version: number;
    type: string;
    content?: ContentEntity[];
}
export interface ContentEntity {
    type: string;
    text?: string;
    content?: ContentEntity[];
}

export type JiraParagraphProps = {
    content: Description;
};

export function JiraParagraph(props: JiraParagraphProps) {
    const { content } = props;

    if (!content || !content.content || content.content.length === 0) {
        return null;
    }

    function renderContent(entities?: ContentEntity[]) {
        if (!entities) {
            return;
        }

        return entities.map((entity, index: number) => (
            <Text key={index}>
                {entity.text}
                {renderContent(entity.content)}
            </Text>
        ));
    }

    return (
        <Wrapper
            className='JiraParagraph-wrapper'
            data-testid='JiraParagraph-wrapper'
        >
            <Paragraph>{renderContent(content.content)}</Paragraph>
        </Wrapper>
    );
}

export default JiraParagraph;
