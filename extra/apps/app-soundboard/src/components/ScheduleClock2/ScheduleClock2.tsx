import React from 'react';
import { Clear, Wrapper, Radio } from './ScheduleClock2.style';
import { Weather } from '@gdi/web-ui';

export type ScheduleClock2Props = {
    weather?: any;
    time: NowInfo;
    changeDelta: (deltaInMinutes: number) => void;
};

export function ScheduleClock2(props: ScheduleClock2Props) {
    const { weather, time } = props;

    return (
        <Wrapper
            className='ScheduleClock2-wrapper'
            data-testid='ScheduleClock2-wrapper'
        >
            {weather && (
                <Weather
                    data={weather}
                    timeDeltaInMinutes={time.timeDeltaInMinutes}
                    dateText={time.shortDateText}
                    locationName={time.alternativeCity}
                />
            )}

            <Radio
                target='_blank'
                href={time.alternativeRadioUrl}
                tabIndex={-1}
            >
                <i className='material-icons'>radio</i>
            </Radio>
            <Clear onClick={() => props.changeDelta(0)} tabIndex={-1}>
                <i className='material-icons'>autorenew</i>
            </Clear>
        </Wrapper>
    );
}

export default ScheduleClock2;
