import React from 'react';
import { Icon } from '@gdi/web-base-ui';
import {
    Wrapper,
    OkIcon,
    ErrorIcon,
    Paragraph,
    Suggestion,
    Details,
} from './OAuthPopup.style';

export type OAuthPopupProps = {
    serviceName: string;
    isSuccess: boolean;
};

export function OAuthPopup(props: OAuthPopupProps) {
    const { isSuccess, serviceName = '' } = props;

    function renderSuccess() {
        return (
            <Wrapper
                className='OAuthPopup-wrapper'
                data-testid='OAuthPopup-wrapper'
            >
                <OkIcon>
                    <Icon iconName='BoxCheckmarkSolid' />
                </OkIcon>
                <Details>
                    <Paragraph>
                        You've successfully logged in to {serviceName}
                    </Paragraph>
                    <Suggestion>You can now close this browser tab</Suggestion>
                </Details>
            </Wrapper>
        );
    }

    function renderError() {
        return (
            <Wrapper
                className='OAuthPopup-wrapper'
                data-testid='OAuthPopup-wrapper'
            >
                <ErrorIcon>
                    <Icon iconName='Cancel' />
                </ErrorIcon>
                <Details>
                    <Paragraph>
                        There was an issue logging in to {serviceName}
                    </Paragraph>
                    <Suggestion>Perhaps try again later</Suggestion>
                </Details>
            </Wrapper>
        );
    }

    return isSuccess ? renderSuccess() : renderError();
}

export default OAuthPopup;
