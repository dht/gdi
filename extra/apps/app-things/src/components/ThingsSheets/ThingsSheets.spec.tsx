import { ThingsSheetsDriver } from './ThingsSheets.driver';
import Chance from 'chance';

const chance = new Chance();

describe('ThingsSheets', () => {
    let driver: ThingsSheetsDriver;

    beforeAll(() => {
        driver = new ThingsSheetsDriver();
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

        expect(containerClassName).toContain('ThingsSheets-wrapper');
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

describe('ThingsSheets snapshots', () => {
    let driver: ThingsSheetsDriver;

    beforeAll(() => {
        driver = new ThingsSheetsDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
