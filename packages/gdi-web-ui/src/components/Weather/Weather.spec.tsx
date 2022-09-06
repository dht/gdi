import { WeatherDriver } from './Weather.driver';

describe('Weather', () => {
    let driver: WeatherDriver;

    beforeAll(() => {
        driver = new WeatherDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Weather-container');
    });
});

describe('Weather snapshots', () => {
    let driver: WeatherDriver;

    beforeAll(() => {
        driver = new WeatherDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
