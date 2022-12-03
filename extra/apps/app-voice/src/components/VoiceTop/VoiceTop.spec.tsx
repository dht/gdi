import { VoiceTopDriver } from './VoiceTop.driver';

describe('VoiceTop', () => {
    let driver: VoiceTopDriver;

    beforeAll(() => {
        driver = new VoiceTopDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('VoiceTop-wrapper');
    });
});

describe('VoiceTop snapshots', () => {
    let driver: VoiceTopDriver;

    beforeAll(() => {
        driver = new VoiceTopDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
