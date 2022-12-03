import { ItemTemplateDriver } from './ItemTemplate.driver';
import Chance from 'chance';

const chance = new Chance();

describe('ItemTemplate', () => {
    let driver: ItemTemplateDriver;

    beforeAll(() => {
        driver = new ItemTemplateDriver();
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

        expect(containerClassName).toContain('ItemTemplate-wrapper');
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

describe('ItemTemplate snapshots', () => {
    let driver: ItemTemplateDriver;

    beforeAll(() => {
        driver = new ItemTemplateDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
