import { VoiceDriver } from './Voice.driver';

describe('Voice', () => {
    let driver: VoiceDriver;

    beforeAll(() => {
        driver = new VoiceDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Voice-wrapper');
    });
});

describe('Voice snapshots', () => {
    let driver: VoiceDriver;

    beforeAll(() => {
        driver = new VoiceDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
