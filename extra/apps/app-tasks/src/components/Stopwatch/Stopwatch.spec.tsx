import { StopwatchDriver } from './Stopwatch.driver';

describe('Stopwatch', () => {
    let driver: StopwatchDriver;

    beforeAll(() => {
        driver = new StopwatchDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Stopwatch-wrapper');
    });
});

describe('Stopwatch snapshots', () => {
    let driver: StopwatchDriver;

    beforeAll(() => {
        driver = new StopwatchDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
