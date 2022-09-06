import { LifecycleDriver } from './Lifecycle.driver';

describe('Lifecycle', () => {
    let driver: LifecycleDriver;

    beforeAll(() => {
        driver = new LifecycleDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Lifecycle-container');
    });
});

describe('Lifecycle snapshots', () => {
    let driver: LifecycleDriver;

    beforeAll(() => {
        driver = new LifecycleDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
