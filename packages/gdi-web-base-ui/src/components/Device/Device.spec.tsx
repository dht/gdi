import { DeviceDriver } from './Device.driver';
import Chance from 'chance';

const chance = new Chance();

describe('Device', () => {
    let driver: DeviceDriver;

    beforeAll(() => {
        driver = new DeviceDriver();
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

        expect(containerClassName).toContain('Device-wrapper');
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

describe('Device snapshots', () => {
    let driver: DeviceDriver;

    beforeAll(() => {
        driver = new DeviceDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
