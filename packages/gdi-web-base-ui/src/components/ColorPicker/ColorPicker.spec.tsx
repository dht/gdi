import { ColorPickerDriver } from './ColorPicker.driver';

describe('ColorPicker', () => {
    let driver: ColorPickerDriver;

    beforeAll(() => {
        driver = new ColorPickerDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('ColorPicker-container');
    });
});

describe('ColorPicker snapshots', () => {
    let driver: ColorPickerDriver;

    beforeAll(() => {
        driver = new ColorPickerDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
