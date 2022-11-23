import { LayeredDriver } from './Layered.driver';
import Chance from 'chance';

const chance = new Chance();

describe('Layered', () => {
    let driver: LayeredDriver;

    beforeAll(() => {
        driver = new LayeredDriver();
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

        expect(containerClassName).toContain('Layered-container');
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

describe('Layered snapshots', () => {
    let driver: LayeredDriver;

    beforeAll(() => {
        driver = new LayeredDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
