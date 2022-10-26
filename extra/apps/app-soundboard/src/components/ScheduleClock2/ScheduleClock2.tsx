import React from 'react';
import { Clear, Container, Radio } from './ScheduleClock2.style';
import { Weather } from '@gdi/web-ui';

export type ScheduleClock2Props = {
    weather?: IWeatherDailyItem;
    time: NowInfo;
    changeDelta: (deltaInMinutes: number) => void;
};

export function ScheduleClock2(props: ScheduleClock2Props) {
    const { weather, time } = props;

    return (
        <Container
            className='ScheduleClock2-container'
            data-testid='ScheduleClock2-container'
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
                tabIndex='-1'
            >
                <i className='material-icons'>radio</i>
            </Radio>
            <Clear onClick={() => props.changeDelta(0)} tabIndex='-1'>
                <i className='material-icons'>autorenew</i>
            </Clear>
        </Container>
    );
}

export default ScheduleClock2;
