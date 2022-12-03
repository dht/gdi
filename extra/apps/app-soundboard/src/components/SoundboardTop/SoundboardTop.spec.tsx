import { SoundboardTopDriver } from './SoundboardTop.driver';

describe('SoundboardTop', () => {
    let driver: SoundboardTopDriver;

    beforeAll(() => {
        driver = new SoundboardTopDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('SoundboardTop-wrapper');
    });
});

describe('SoundboardTop snapshots', () => {
    let driver: SoundboardTopDriver;

    beforeAll(() => {
        driver = new SoundboardTopDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
