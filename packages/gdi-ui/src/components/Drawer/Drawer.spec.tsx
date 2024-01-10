import { DrawerDriver } from './Drawer.driver';
import Chance from 'chance';

const chance = new Chance();

describe('Drawer', () => {
    let driver: DrawerDriver;

    beforeAll(() => {
        driver = new DrawerDriver();
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

        expect(wrapperClassName).toContain('Drawer-wrapper');
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

describe('Drawer snapshots', () => {
    let driver: DrawerDriver;

    beforeAll(() => {
        driver = new DrawerDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
