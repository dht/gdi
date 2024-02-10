import { PplSwitchDriver } from './PplSwitch.driver';
import Chance from 'chance';

const chance = new Chance();

describe('PplSwitch', () => {
    let driver: PplSwitchDriver;

    beforeAll(() => {
        driver = new PplSwitchDriver();
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

        expect(wrapperClassName).toContain('PplSwitch-wrapper');
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

describe('PplSwitch snapshots', () => {
    let driver: PplSwitchDriver;

    beforeAll(() => {
        driver = new PplSwitchDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
