import arrays from '../utilities/arrays.js';
import numbers from '../utilities/numbers.js';
import strings from '../utilities/strings.js';

describe('suite numbers', () => {
    it('expect multiply(5, 8) to equal 40', () => { 
        expect(numbers.multiply(5, 8)).toEqual(40);
    });

    it('expect sum(5, 8) to equal 13 And it`s the same object', () => { 
        expect(numbers.sum(5, 8)).toEqual(13);
        expect(numbers.sum(5, 8)).toBe(13);
    });

    it('expect divide(30, 2) to equal 15', () => { 
        expect(numbers.divide(30, 2)).toBeCloseTo(15);
        expect(numbers.divide(30, 0)).toBe(Infinity);
    });

    it('expect subtract(5, 2) to equal 3', () => { 
        expect(numbers.subtract(5, 2)).toEqual(3);
    });

    it('expect square(5) to BeGreaterThanOrEqual 25', () => { 
        expect(numbers.square(5)).toBeGreaterThanOrEqual(25);
    });
}); 

describe('suite strings', () => {
    it('expect concat(`@`, `JC`) to equal @JC', () => { 
        expect(strings.concat('@', 'JC')).toEqual('@JC');
    });

    it('expect capitalize(`juan carlos`) to equal Juan Carlos', () => { 
        expect(strings.capitalize('juan carlos')).toEqual('Juan Carlos');
    });

    it('expect upperCase(`jc`) to equal JC', () => { 
        expect(strings.upperCase('jc')).toEqual('JC');
    });

    it('expect lowerCase(`POR FAVOR`) to equal por favor', () => { 
        expect(strings.lowerCase('POR FAVOR')).toEqual('por favor');
    });
    
}); 

describe('suite arrays', () => {
    const numArr = [1, 2, 3, 4];
    const wordArr = ['mouse', 'cat', 'dog', 'bird'];

    it('expect concatArr([1, 2, 3, 4] - [`mouse`, `cat`, `dog`, `bird`]) to equal [1, 2, 3, 4, `mouse`, `cat`, `dog`, `bird`]', () => { 
        expect(arrays.concatArr(numArr, wordArr)).toEqual([1, 2, 3, 4, 'mouse', 'cat', 'dog', 'bird']);
    });

    it('expect addArr([1, 2, 3, 4]) to equal 10', () => { 
        expect(arrays.addArr(numArr)).toEqual(10);
    });

    it('expect lgNum([1, 2, 3, 4]) to equal 4', () => { 
        expect(arrays.lgNum(numArr)).toEqual(4);
    });

    it('expect cut3([`mouse`, `cat`, `dog`, `bird`]) to equal [`mouse`, `cat`, `bird`]', () => { 
        expect(arrays.cut3(wordArr)).toEqual(['mouse', 'cat', 'bird']);
    });

}); 
