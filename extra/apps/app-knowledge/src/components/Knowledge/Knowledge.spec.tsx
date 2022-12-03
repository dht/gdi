import { KnowledgeDriver } from './Knowledge.driver';
import Chance from 'chance';

const chance = new Chance();

describe('Knowledge', () => {
    let driver: KnowledgeDriver;

    beforeAll(() => {
        driver = new KnowledgeDriver();
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

        expect(containerClassName).toContain('Knowledge-wrapper');
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

describe('Knowledge snapshots', () => {
    let driver: KnowledgeDriver;

    beforeAll(() => {
        driver = new KnowledgeDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
