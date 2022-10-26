import { ProgressBar } from '@gdi/web-ui';
import React from 'react';
import { Container, Parameter, ParameterName, Icon } from './Sims.style';

export type SimsProps = {};

export function Sims(_props: SimsProps) {
    return (
        <Container className='Sims-container' data-testid='Sims-container'>
            <Parameter>
                <ParameterName>
                    Food
                    <Icon>
                        <i className='material-icons'>restaurant</i>
                    </Icon>
                </ParameterName>
                <ProgressBar value={50} color='orange' />
            </Parameter>
            <Parameter>
                <ParameterName>
                    Sleep{' '}
                    <Icon>
                        <i className='material-icons'>bed</i>
                    </Icon>
                </ParameterName>

                <ProgressBar value={10} color='magenta' />
            </Parameter>
            <Parameter>
                <ParameterName>
                    Social{' '}
                    <Icon>
                        <i className='material-icons'>people</i>
                    </Icon>
                </ParameterName>
                <ProgressBar value={10} color='greenyellow' />
            </Parameter>
        </Container>
    );
}

export default Sims;
