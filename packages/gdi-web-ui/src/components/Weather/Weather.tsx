import React from 'react';
import {
    Wrapper,
    City,
    Time,
    CurrentDate,
    Report,
    Temperature,
    TemperatureLine,
} from './Weather.style';
import { Clock } from '../Clock/Clock';

export type WeatherProps = {
    locationName: string;
    data: Json;
    timeDeltaInMinutes?: number;
    dateText: string;
};

export function Weather(props: WeatherProps) {
    const { data, timeDeltaInMinutes = 0, locationName, dateText } = props;
    const { iconDay, temperatureMaximum } = data;
    const { value, unit } = temperatureMaximum;
    const { icon, iconPhrase } = iconDay;

    const iconSource = `https://appofthebox.web.app/weather/${lz(icon)}-s.png`;

    return (
        <Wrapper className='Weather-wrapper' data-testid='Weather-wrapper'>
            <City>{locationName}</City>
            <Time>
                <Clock timeDeltaInMinutes={timeDeltaInMinutes} />
            </Time>
            <CurrentDate>{dateText}</CurrentDate>

            <Temperature>
                <TemperatureLine>
                    {value}°{unit}
                    <img src={iconSource} />
                </TemperatureLine>
                <Report>{iconPhrase}</Report>
            </Temperature>
        </Wrapper>
    );
}

const lz = (str: string | number) =>
    String(str).length === 1 ? '0' + str : str;

export default Weather;
