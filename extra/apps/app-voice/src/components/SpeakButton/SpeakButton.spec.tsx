import { SpeakButtonDriver } from './SpeakButton.driver';

describe('SpeakButton', () => {
    let driver: SpeakButtonDriver;

    beforeAll(() => {
        driver = new SpeakButtonDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('SpeakButton-wrapper');
    });
});

describe('SpeakButton snapshots', () => {
    let driver: SpeakButtonDriver;

    beforeAll(() => {
        driver = new SpeakButtonDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
