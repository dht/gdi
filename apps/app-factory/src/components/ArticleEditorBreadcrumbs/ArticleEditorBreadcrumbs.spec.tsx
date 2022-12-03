import { ArticleEditorBreadcrumbsDriver } from './ArticleEditorBreadcrumbs.driver';
import Chance from 'chance';

const chance = new Chance();

describe('ArticleEditorBreadcrumbs', () => {
    let driver: ArticleEditorBreadcrumbsDriver;

    beforeAll(() => {
        driver = new ArticleEditorBreadcrumbsDriver();
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

        expect(containerClassName).toContain(
            'ArticleEditorBreadcrumbs-wrapper'
        );
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

describe('ArticleEditorBreadcrumbs snapshots', () => {
    let driver: ArticleEditorBreadcrumbsDriver;

    beforeAll(() => {
        driver = new ArticleEditorBreadcrumbsDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
