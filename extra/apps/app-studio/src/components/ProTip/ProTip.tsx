import React from 'react';
import {
    Container,
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
        <Container className='ProTip-container' data-testid='ProTip-container'>
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
        </Container>
    );
}

export default ProTip;
