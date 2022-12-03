import { MixerStructureDriver } from './MixerStructure.driver';
import Chance from 'chance';

const chance = new Chance();

describe('MixerStructure', () => {
    let driver: MixerStructureDriver;

    beforeAll(() => {
        driver = new MixerStructureDriver();
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

        expect(containerClassName).toContain('MixerStructure-wrapper');
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

describe('MixerStructure snapshots', () => {
    let driver: MixerStructureDriver;

    beforeAll(() => {
        driver = new MixerStructureDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
