import { toSingular, toSingularAction } from './singular';

describe('singular', () => {
    it('should transform simple words', () => {
        expect(toSingular('products')).toEqual('product');
    });

    it('should transform unique words', () => {
        expect(toSingular('people')).toEqual('person');
    });

    it('should transform "es" words', () => {
        expect(toSingular('taxes')).toEqual('tax');
    });

    it('should transform "ies" words', () => {
        expect(toSingular('cities')).toEqual('city');
    });

    it('should transform "oes" words', () => {
        expect(toSingular('tomatoes')).toEqual('tomato');
    });

    it('should return original word if unknown', () => {
        expect(toSingular('bla')).toEqual('bla');
    });

    it('should transform "oes" words to singular action', () => {
        expect(toSingularAction('tomatoes')).toEqual('TOMATO');
    });
});
