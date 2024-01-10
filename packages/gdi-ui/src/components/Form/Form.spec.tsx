import { FormDriver } from './Form.driver';

describe('Form', () => {
  let driver: FormDriver;

  beforeAll(() => {
    driver = new FormDriver();
  });

  it('should render component', () => {
    const containerClassName = driver.given //
      .props({})
      .when.rendered()
      .get.containerClassName();

    expect(containerClassName).toBe('Form-wrapper');
  });
});

describe('Form snapshots', () => {
  let driver: FormDriver;

  beforeAll(() => {
    driver = new FormDriver();
  });

  it('should render component', () => {
    expect(driver.when.snapshot()).toMatchSnapshot();
  });
});
