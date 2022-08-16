import _ from 'lodash';

export default {
    camelCase: (text: string) => _.camelCase(text), // Foo Bar => fooBar
    kebabCase: (text: string) => _.kebabCase(text), // Foo Bar => foo-bar
    lowerCase: (text: string) => _.lowerCase(text), // __FOO_BAR__ => foo bar
    upperCase: (text: string) => _.upperCase(text), // __FOO_BAR__ => foo bar
    lowerFirst: (text: string) => _.lowerFirst(text), // FRED => fRED
    snakeCase: (text: string) => _.snakeCase(text), // --FOO-BAR-- => foo_bar
    upperFirst: (text: string) => _.upperFirst(text), // fred => Fred
};
