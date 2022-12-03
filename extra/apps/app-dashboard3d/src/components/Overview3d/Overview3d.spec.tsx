import { Overview3dDriver } from './Overview3d.driver';
import Chance from 'chance';

const chance = new Chance();

describe('Overview3d', () => {
    let driver: Overview3dDriver;

    beforeAll(() => {
        driver = new Overview3dDriver();
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

        expect(containerClassName).toContain('Overview3d-wrapper');
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

describe('Overview3d snapshots', () => {
    let driver: Overview3dDriver;

    beforeAll(() => {
        driver = new Overview3dDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
