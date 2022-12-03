import { SliderDriver } from './Slider.driver';

describe('Slider', () => {
    let driver: SliderDriver;

    beforeAll(() => {
        driver = new SliderDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Slider-wrapper');
    });
});

describe('Slider snapshots', () => {
    let driver: SliderDriver;

    beforeAll(() => {
        driver = new SliderDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
