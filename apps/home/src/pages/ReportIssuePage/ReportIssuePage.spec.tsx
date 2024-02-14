import { ReportIssuePageDriver } from './ReportIssuePage.driver';
import Chance from 'chance';

const chance = new Chance();

describe('ReportIssuePage', () => {
    let driver: ReportIssuePageDriver;

    beforeAll(() => {
        driver = new ReportIssuePageDriver();
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

        expect(wrapperClassName).toContain('ReportIssuePage-wrapper');
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

describe('ReportIssuePage snapshots', () => {
    let driver: ReportIssuePageDriver;

    beforeAll(() => {
        driver = new ReportIssuePageDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
