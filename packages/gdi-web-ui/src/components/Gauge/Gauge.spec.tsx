import { GaugeDriver } from './Gauge.driver';

describe('Gauge', () => {
    let driver: GaugeDriver;

    beforeAll(() => {
        driver = new GaugeDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Gauge-wrapper');
    });
});

describe('Gauge snapshots', () => {
    let driver: GaugeDriver;

    beforeAll(() => {
        driver = new GaugeDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
