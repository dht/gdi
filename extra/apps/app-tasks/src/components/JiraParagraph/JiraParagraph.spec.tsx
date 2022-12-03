import { JiraParagraphDriver } from './JiraParagraph.driver';

describe('JiraParagraph', () => {
    let driver: JiraParagraphDriver;

    beforeAll(() => {
        driver = new JiraParagraphDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('JiraParagraph-wrapper');
    });
});

describe('JiraParagraph snapshots', () => {
    let driver: JiraParagraphDriver;

    beforeAll(() => {
        driver = new JiraParagraphDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
