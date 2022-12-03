import { FilterBarDriver } from './FilterBar.driver';
import Chance from 'chance';

const chance = new Chance();

describe('FilterBar', () => {
    let driver: FilterBarDriver;

    beforeAll(() => {
        driver = new FilterBarDriver();
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

        expect(containerClassName).toContain('FilterBar-wrapper');
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

describe('FilterBar snapshots', () => {
    let driver: FilterBarDriver;

    beforeAll(() => {
        driver = new FilterBarDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
