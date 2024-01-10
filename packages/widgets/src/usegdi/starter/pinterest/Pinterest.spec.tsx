import { PinterestDriver } from './Pinterest.driver';
import Chance from 'chance';

const chance = new Chance();

describe('Pinterest', () => {
    let driver: PinterestDriver;

    beforeAll(() => {
        driver = new PinterestDriver();
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

        expect(wrapperClassName).toContain('Pinterest-wrapper');
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

describe('Pinterest snapshots', () => {
    let driver: PinterestDriver;

    beforeAll(() => {
        driver = new PinterestDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
