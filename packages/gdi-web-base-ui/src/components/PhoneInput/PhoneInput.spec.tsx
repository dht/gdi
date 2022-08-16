import { PhoneInputDriver } from './PhoneInput.driver';

describe('PhoneInput', () => {
    let driver: PhoneInputDriver;

    beforeAll(() => {
        driver = new PhoneInputDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('PhoneInput-container');
    });
});

describe('PhoneInput snapshots', () => {
    let driver: PhoneInputDriver;

    beforeAll(() => {
        driver = new PhoneInputDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
