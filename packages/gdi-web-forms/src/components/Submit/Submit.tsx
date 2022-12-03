import React from 'react';
import {
    Actions,
    Agreement,
    Wrapper,
    Agreements,
    Span,
    Link,
} from './Submit.style';
import { Button, Checkbox } from '@gdi/web-base-ui';
import { IFormSubmit, ISubmitAgreement } from '../../types';
import { useSetState } from 'react-use';

export type SubmitProps = {
    submit: IFormSubmit;
    isSubmitting?: boolean;
    onClose?: () => void;
};

type AgreeState = Record<string, boolean>;

export function Submit(props: SubmitProps) {
    const { submit, isSubmitting } = props;
    const { agreements, title } = submit;

    const [agree, patchAgree] = useSetState<AgreeState>({});

    function renderAgreement(agreement: ISubmitAgreement) {
        const { text, linkText, url } = agreement;

        return (
            <Agreement key={agreement.id} className='agreement'>
                <Checkbox
                    value={agree[agreement.id]}
                    onChange={(
                        _ev?: React.FormEvent<HTMLInputElement | HTMLElement>,
                        checked?: boolean
                    ) => {
                        patchAgree({ [agreement.id]: checked });
                    }}
                >
                    {stringWithLinksToJsx(text, linkText, url)}
                </Checkbox>
            </Agreement>
        );
    }

    function renderAgreements() {
        if (!agreements) {
            return null;
        }

        return (
            <Agreements>
                {agreements.map((agreement: ISubmitAgreement) =>
                    renderAgreement(agreement)
                )}
            </Agreements>
        );
    }

    return (
        <Wrapper className='Submit-wrapper' data-testid='Submit-wrapper'>
            {renderAgreements()}
            <Actions>
                {props.onClose && (
                    <Button title='Cancel' onClick={props.onClose} />
                )}
                <Button
                    disabled={!canSubmit(agreements, agree)}
                    isSubmit={true}
                    primary={true}
                    isSubmitting={isSubmitting}
                    title={title}
                />
            </Actions>
        </Wrapper>
    );
}

const canSubmit = (
    agreements: ISubmitAgreement[] = [],
    agreeState: AgreeState = {}
) => {
    return agreements.reduce((output, agreement) => {
        const { id, isRequired } = agreement;
        const ok = !isRequired || agreeState[id];

        return output && ok;
    }, true);
};

const stringWithLinksToJsx = (text: string, linkText: string, url: string) => {
    const output: JSX.Element[] = [];

    const index = text.indexOf(linkText);

    if (!index) {
        output.push(<Span>{text}</Span>);
        return <>{output}</>;
    }

    const termBefore = text.substring(0, index);
    const termAfter = text.substring(index + linkText.length);

    output.push(<Span>{termBefore}</Span>);
    output.push(
        <Link href={url} target='_blank' className='agreement-link'>
            {linkText}
        </Link>
    );
    output.push(<Span>{termAfter}</Span>);

    return <>{output}</>;
};

export default Submit;
