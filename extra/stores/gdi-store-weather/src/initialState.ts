import {
    generateReducersForStore,
    generateActionsForStore,
} from 'redux-store-generator';
import { IWeatherStore } from './types';
import p from '../package.json';

export const initialState: IWeatherStore = {
    meta: {
        version: p.version,
        description: p.description,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        packageType: p.gdi.packageType as GdiEntity,
    },
    weatherLocations: {
        '1': {
            id: '1',
            key: '100000',
            name: 'London',
            country: 'England',
            latitude: 0,
            longitude: 0,
        },
    },
    weatherHourlyItems: {
        '1': {
            id: '1',
            identifier: '100000_1_1_2001_18:00',
            locationKey: '100000',
            dateTime: '2022-06-02T02:00:00+00:00',
            day: 1,
            week: 1,
            year: 2022,
            hour: '18:00',
            temperature: {
                value: 22.5,
                unit: 'C',
                unitType: 17,
            },
            icon: {
                icon: 35,
                iconPhrase: 'Partly cloudy',
                hasPrecipitation: false,
                precipitationChance: 0,
            },
            isDaylight: false,
        },
    },
    weatherDailyItems: {
        '1': {
            id: '1',
            identifier: '100000_1_1_2001_18:00',
            locationKey: '1000000',
            dateTime: '2022-06-02T02:00:00+00:00',
            day: 1,
            week: 1,
            year: 2022,
            temperatureMinimum: {
                value: 20.1,
                unit: 'C',
                unitType: 17,
            },
            temperatureMaximum: {
                value: 32.5,
                unit: 'C',
                unitType: 17,
            },
            iconDay: {
                icon: 35,
                iconPhrase: 'Partly cloudy',
                hasPrecipitation: false,
                precipitationChance: 0,
            },
            iconNight: {
                icon: 35,
                iconPhrase: 'Partly cloudy',
                hasPrecipitation: false,
                precipitationChance: 0,
            },
        },
    },
};

export const reducers = generateReducersForStore<IWeatherStore>(initialState);
export const actions = generateActionsForStore<IWeatherStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.weatherLocations.setAll({}));
        store.dispatch(actions.weatherHourlyItems.setAll({}));
        store.dispatch(actions.weatherDailyItems.setAll({}));
    });
};
