import { LogsLifecycleDriver } from './LogsLifecycle.driver';

describe('LogsLifecycle', () => {
    let driver: LogsLifecycleDriver;

    beforeAll(() => {
        driver = new LogsLifecycleDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('LogsLifecycle-wrapper');
    });
});

describe('LogsLifecycle snapshots', () => {
    let driver: LogsLifecycleDriver;

    beforeAll(() => {
        driver = new LogsLifecycleDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
