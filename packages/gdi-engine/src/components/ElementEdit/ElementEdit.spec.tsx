import { ElementEditDriver } from './ElementEdit.driver';
import Chance from 'chance';

const chance = new Chance();

describe('ElementEdit', () => {
    let driver: ElementEditDriver;

    beforeAll(() => {
        driver = new ElementEditDriver();
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

        expect(containerClassName).toContain('ElementEdit-wrapper');
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

describe('ElementEdit snapshots', () => {
    let driver: ElementEditDriver;

    beforeAll(() => {
        driver = new ElementEditDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
