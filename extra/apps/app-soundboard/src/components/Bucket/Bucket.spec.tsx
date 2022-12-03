import { BucketDriver } from './Bucket.driver';

describe('Bucket', () => {
    let driver: BucketDriver;

    beforeAll(() => {
        driver = new BucketDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Bucket-wrapper');
    });
});

describe('Bucket snapshots', () => {
    let driver: BucketDriver;

    beforeAll(() => {
        driver = new BucketDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
