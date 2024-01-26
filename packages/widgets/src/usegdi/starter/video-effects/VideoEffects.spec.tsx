import { VideoEffectsDriver } from './VideoEffects.driver';
import Chance from 'chance';

const chance = new Chance();

describe('VideoEffects', () => {
    let driver: VideoEffectsDriver;

    beforeAll(() => {
        driver = new VideoEffectsDriver();
    });

    it('should render button', () => {
        const label = chance.word();

        const element = driver.given
            .props({
                title: label,
            })
            .when.rendered();

        const wrapperClassName = element.get.wrapperClassName();
        const innerText = element.get.label();

        expect(wrapperClassName).toContain('VideoEffects-wrapper');
        expect(innerText).toBe(label);
    });

    it('should click button', () => {
        const callback = jest.fn();

        driver.given
            .props({
                onClick: callback,
            })
            .when.rendered()
            .when.clicked();

        expect(callback).toHaveBeenCalledTimes(1);
    });
});

describe('VideoEffects snapshots', () => {
    let driver: VideoEffectsDriver;

    beforeAll(() => {
        driver = new VideoEffectsDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
