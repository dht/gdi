import { FieldDriver } from './Field.driver';

describe('Field', () => {
    let driver: FieldDriver;

    beforeAll(() => {
        driver = new FieldDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Field-container');
    });
});

describe('Field snapshots', () => {
    let driver: FieldDriver;

    beforeAll(() => {
        driver = new FieldDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
