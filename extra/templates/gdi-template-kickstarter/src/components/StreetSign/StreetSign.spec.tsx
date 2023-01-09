import { StreetSignDriver } from './StreetSign.driver';
import Chance from 'chance';

const chance = new Chance();

describe('StreetSign', () => {
    let driver: StreetSignDriver;

    beforeAll(() => {
        driver = new StreetSignDriver();
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

        expect(wrapperClassName).toContain('StreetSign-wrapper');
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

describe('StreetSign snapshots', () => {
    let driver: StreetSignDriver;

    beforeAll(() => {
        driver = new StreetSignDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
