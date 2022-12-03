import React from 'react';
import {
    Wrapper,
    Box,
    Slogan,
    Title,
    Paragraph,
    Button,
    OtherOptions,
} from './ProTip.style';

export type ProTipProps = {};

export function ProTip(_props: ProTipProps) {
    return (
        <Wrapper className='ProTip-wrapper' data-testid='ProTip-wrapper'>
            <Box>
                <Slogan>Protip</Slogan>
                <Title>QuickBooks</Title>
                <Paragraph>
                    You are currently using spreadsheets to calculate your
                    taxes. Many SMBs use SAAS for that. They report significant
                    time saving
                </Paragraph>
                <Button>Set it up for me</Button>
                <OtherOptions>See other options</OtherOptions>
            </Box>
        </Wrapper>
    );
}

export default ProTip;
