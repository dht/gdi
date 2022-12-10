import React from 'react';
import {
    A,
    Actions,
    Content,
    Paragraph,
    Url,
    Wrapper,
} from './PromotePage.style';
import { Button } from '@gdi/web-ui';

export type PromotePageProps = {
    paragraph: string;
    link: string;
    agreeText: string;
    cancelText: string;
    onSubmit: (value: boolean) => void;
    onCancel: () => void;
};

export function PromotePage(props: PromotePageProps) {
    const { paragraph, link, agreeText, cancelText } = props;

    return (
        <Wrapper
            className='PromotePage-wrapper'
            data-testid='PromotePage-wrapper'
        >
            <Content>
                <Paragraph>{paragraph}</Paragraph>
                <Url>
                    URL:
                    <A href={link} target='_blank'>
                        {link}
                    </A>
                </Url>
            </Content>
            <Actions>
                <Button title={cancelText} onClick={props.onCancel} />
                <Button
                    primary
                    title={agreeText}
                    onClick={() => props.onSubmit(true)}
                />
            </Actions>
        </Wrapper>
    );
}

export default PromotePage;
