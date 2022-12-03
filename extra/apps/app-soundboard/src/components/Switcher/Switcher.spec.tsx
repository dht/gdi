import { SwitcherDriver } from './Switcher.driver';

describe('Switcher', () => {
    let driver: SwitcherDriver;

    beforeAll(() => {
        driver = new SwitcherDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Switcher-wrapper');
    });
});

describe('Switcher snapshots', () => {
    let driver: SwitcherDriver;

    beforeAll(() => {
        driver = new SwitcherDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
