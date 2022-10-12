// AUTO-GENERATED

export const A8 = {};

declare global {
    export type IWeatherStore = {
        weatherLocations: IWeatherLocations;
        weatherHourlyItems: IWeatherHourlyItems;
        weatherDailyItems: IWeatherDailyItems;
    };

    type Temperature = {
        value: number;
        unit: string;
        unitType: number;
    };

    type WeatherIcon = {
        icon: number;
        iconPhrase: string;
        hasPrecipitation: boolean;
        precipitationChance?: number;
    };

    export type IWeatherLocation = {
        id: string;
        key: string;
        name: string;
        country: string;
        latitude: number;
        longitude: number;
    };

    export type IWeatherHourlyItem = {
        id: string;
        identifier: string;
        locationKey: string;
        dateTime: string;
        day: number;
        week: number;
        year: number;
        hour: string;
        temperature: Temperature;
        icon: WeatherIcon;
        isDaylight: boolean;
    };

    export type IWeatherDailyItem = {
        id: string;
        identifier: string;
        locationKey: string;
        dateTime: string;
        day: number;
        week: number;
        year: number;
        temperatureMinimum: Temperature;
        temperatureMaximum: Temperature;
        iconDay: WeatherIcon;
        iconNight: WeatherIcon;
    };

    export type IWeatherLocations = Record<string, IWeatherLocation>;
    export type IWeatherHourlyItems = Record<string, IWeatherHourlyItem>;
    export type IWeatherDailyItems = Record<string, IWeatherDailyItem>;
}
