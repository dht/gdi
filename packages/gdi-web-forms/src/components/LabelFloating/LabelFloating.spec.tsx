import { LabelFloatingDriver } from './LabelFloating.driver';

describe('LabelFloating', () => {
    let driver: LabelFloatingDriver;

    beforeAll(() => {
        driver = new LabelFloatingDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('LabelFloating-wrapper');
    });
});

describe('LabelFloating snapshots', () => {
    let driver: LabelFloatingDriver;

    beforeAll(() => {
        driver = new LabelFloatingDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
