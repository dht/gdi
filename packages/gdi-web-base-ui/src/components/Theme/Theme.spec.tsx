import { ThemeDriver } from './Theme.driver';
import Chance from 'chance';

const chance = new Chance();

describe('Theme', () => {
    let driver: ThemeDriver;

    beforeAll(() => {
        driver = new ThemeDriver();
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

        expect(containerClassName).toContain('Theme-container');
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

describe('Theme snapshots', () => {
    let driver: ThemeDriver;

    beforeAll(() => {
        driver = new ThemeDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
