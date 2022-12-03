import { MixerDriver } from './Mixer.driver';
import Chance from 'chance';

const chance = new Chance();

describe('Mixer', () => {
    let driver: MixerDriver;

    beforeAll(() => {
        driver = new MixerDriver();
    });

    it('should render button', () => {
        const label = chance.word();

        const element = driver.given
            .props({
                title: label,
            })
            .when.rendered();

        const containerClassName = element.get.containerClassName();
        const innerText = element.get.label();

        expect(containerClassName).toContain('Mixer-wrapper');
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

describe('Mixer snapshots', () => {
    let driver: MixerDriver;

    beforeAll(() => {
        driver = new MixerDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
