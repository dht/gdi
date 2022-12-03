import { SitePropertiesDriver } from './SiteProperties.driver';
import Chance from 'chance';

const chance = new Chance();

describe('SiteProperties', () => {
    let driver: SitePropertiesDriver;

    beforeAll(() => {
        driver = new SitePropertiesDriver();
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

        expect(containerClassName).toContain('SiteProperties-wrapper');
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

describe('SiteProperties snapshots', () => {
    let driver: SitePropertiesDriver;

    beforeAll(() => {
        driver = new SitePropertiesDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
