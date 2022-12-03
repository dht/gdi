import { SpeakerDriver } from './Speaker.driver';

describe('Speaker', () => {
    let driver: SpeakerDriver;

    beforeAll(() => {
        driver = new SpeakerDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Speaker-wrapper');
    });
});

describe('Speaker snapshots', () => {
    let driver: SpeakerDriver;

    beforeAll(() => {
        driver = new SpeakerDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
