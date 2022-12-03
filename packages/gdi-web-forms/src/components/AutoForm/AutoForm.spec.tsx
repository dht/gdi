import { AutoFormDriver } from './AutoForm.driver';

describe('AutoForm', () => {
    let driver: AutoFormDriver;

    beforeAll(() => {
        driver = new AutoFormDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('AutoForm-wrapper');
    });
});

describe('AutoForm snapshots', () => {
    let driver: AutoFormDriver;

    beforeAll(() => {
        driver = new AutoFormDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
