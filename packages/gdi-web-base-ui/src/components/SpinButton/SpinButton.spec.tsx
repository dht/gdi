import { SpinButtonDriver } from './SpinButton.driver';

describe('SpinButton', () => {
    let driver: SpinButtonDriver;

    beforeAll(() => {
        driver = new SpinButtonDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('SpinButton-container');
    });
});

describe('SpinButton snapshots', () => {
    let driver: SpinButtonDriver;

    beforeAll(() => {
        driver = new SpinButtonDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
