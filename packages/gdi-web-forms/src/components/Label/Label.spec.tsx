import { LabelDriver } from './Label.driver';

describe('Label', () => {
    let driver: LabelDriver;

    beforeAll(() => {
        driver = new LabelDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Label-container');
    });
});

describe('Label snapshots', () => {
    let driver: LabelDriver;

    beforeAll(() => {
        driver = new LabelDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
