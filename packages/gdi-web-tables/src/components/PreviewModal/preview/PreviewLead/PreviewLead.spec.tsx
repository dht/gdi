import { PreviewLeadDriver } from './PreviewLead.driver';
import Chance from 'chance';

const chance = new Chance();

describe('PreviewLead', () => {
    let driver: PreviewLeadDriver;

    beforeAll(() => {
        driver = new PreviewLeadDriver();
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

        expect(containerClassName).toContain('PreviewLead-container');
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

describe('PreviewLead snapshots', () => {
    let driver: PreviewLeadDriver;

    beforeAll(() => {
        driver = new PreviewLeadDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
