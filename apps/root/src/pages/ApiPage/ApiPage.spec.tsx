import { ApiPageDriver } from './ApiPage.driver';
import Chance from 'chance';

const chance = new Chance();

describe('ApiPage', () => {
    let driver: ApiPageDriver;

    beforeAll(() => {
        driver = new ApiPageDriver();
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

        expect(wrapperClassName).toContain('ApiPage-wrapper');
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

describe('ApiPage snapshots', () => {
    let driver: ApiPageDriver;

    beforeAll(() => {
        driver = new ApiPageDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
