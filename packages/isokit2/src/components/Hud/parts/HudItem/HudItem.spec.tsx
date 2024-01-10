import { HudItemDriver } from './HudItem.driver';
import Chance from 'chance';

const chance = new Chance();

describe('HudItem', () => {
    let driver: HudItemDriver;

    beforeAll(() => {
        driver = new HudItemDriver();
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

        expect(wrapperClassName).toContain('HudItem-wrapper');
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

describe('HudItem snapshots', () => {
    let driver: HudItemDriver;

    beforeAll(() => {
        driver = new HudItemDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
