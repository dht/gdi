import { CheckboxDriver } from './Checkbox.driver';

describe('Checkbox', () => {
    let driver: CheckboxDriver;

    beforeAll(() => {
        driver = new CheckboxDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Checkbox-wrapper');
    });
});

describe('Checkbox snapshots', () => {
    let driver: CheckboxDriver;

    beforeAll(() => {
        driver = new CheckboxDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
