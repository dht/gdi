import { PlaybackDriver } from './Playback.driver';

describe('Playback', () => {
    let driver: PlaybackDriver;

    beforeAll(() => {
        driver = new PlaybackDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Playback-container');
    });
});

describe('Playback snapshots', () => {
    let driver: PlaybackDriver;

    beforeAll(() => {
        driver = new PlaybackDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
