import { ContactUsDriver } from './ContactUs.driver';
import Chance from 'chance';

const chance = new Chance();

describe('ContactUs', () => {
    let driver: ContactUsDriver;

    beforeAll(() => {
        driver = new ContactUsDriver();
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

        expect(containerClassName).toContain('ContactUs-container');
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

describe('ContactUs snapshots', () => {
    let driver: ContactUsDriver;

    beforeAll(() => {
        driver = new ContactUsDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
