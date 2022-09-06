import React from 'react';
import { Icon } from '@gdi/web-base-ui';
import {
    Container,
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
            <Container
                className='OAuthPopup-container'
                data-testid='OAuthPopup-container'
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
            </Container>
        );
    }

    function renderError() {
        return (
            <Container
                className='OAuthPopup-container'
                data-testid='OAuthPopup-container'
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
            </Container>
        );
    }

    return isSuccess ? renderSuccess() : renderError();
}

export default OAuthPopup;
