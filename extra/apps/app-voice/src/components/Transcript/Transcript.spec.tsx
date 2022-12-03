import { TranscriptDriver } from './Transcript.driver';

describe('Transcript', () => {
    let driver: TranscriptDriver;

    beforeAll(() => {
        driver = new TranscriptDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Transcript-wrapper');
    });
});

describe('Transcript snapshots', () => {
    let driver: TranscriptDriver;

    beforeAll(() => {
        driver = new TranscriptDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
