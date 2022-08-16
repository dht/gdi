import { FilterAutoDriver } from './FilterAuto.driver';
import Chance from 'chance';

const chance = new Chance();

describe('FilterAuto', () => {
    let driver: FilterAutoDriver;

    beforeAll(() => {
        driver = new FilterAutoDriver();
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

        expect(containerClassName).toContain('FilterAuto-container');
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

describe('FilterAuto snapshots', () => {
    let driver: FilterAutoDriver;

    beforeAll(() => {
        driver = new FilterAutoDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
