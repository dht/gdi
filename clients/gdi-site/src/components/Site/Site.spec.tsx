import { SiteDriver } from './Site.driver';
import Chance from 'chance';

const chance = new Chance();

describe('Site', () => {
    let driver: SiteDriver;

    beforeAll(() => {
        driver = new SiteDriver();
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

        expect(containerClassName).toContain('Site-wrapper');
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

describe('Site snapshots', () => {
    let driver: SiteDriver;

    beforeAll(() => {
        driver = new SiteDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
