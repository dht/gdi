import { TopMenuDriver } from './TopMenu.driver';
import Chance from 'chance';

const chance = new Chance();

describe('TopMenu', () => {
    let driver: TopMenuDriver;

    beforeAll(() => {
        driver = new TopMenuDriver();
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

        expect(containerClassName).toContain('TopMenu-container');
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

describe('TopMenu snapshots', () => {
    let driver: TopMenuDriver;

    beforeAll(() => {
        driver = new TopMenuDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
