import { SoundboardDriver } from './Soundboard.driver';
import Chance from 'chance';

const chance = new Chance();

describe('Soundboard', () => {
    let driver: SoundboardDriver;

    beforeAll(() => {
        driver = new SoundboardDriver();
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

        expect(wrapperClassName).toContain('Soundboard-wrapper');
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

describe('Soundboard snapshots', () => {
    let driver: SoundboardDriver;

    beforeAll(() => {
        driver = new SoundboardDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
