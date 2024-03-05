import { BoardsPageDriver } from './BoardsPage.driver';
import Chance from 'chance';

const chance = new Chance();

describe('BoardsPage', () => {
    let driver: BoardsPageDriver;

    beforeAll(() => {
        driver = new BoardsPageDriver();
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

        expect(wrapperClassName).toContain('BoardsPage-wrapper');
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

describe('BoardsPage snapshots', () => {
    let driver: BoardsPageDriver;

    beforeAll(() => {
        driver = new BoardsPageDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
