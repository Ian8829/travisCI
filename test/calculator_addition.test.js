import { assert } from 'chai';
import { add } from '../';

describe('add()', () => {
	it('should add positive numbers together', () => {
		expect(add(1, 2)).toEqual(3);
		expect(add(3, 2)).toEqual(5);
	});

	it('should add positive and negative numbers together', () => {
		expect(add(-1, 1)).toBe(0);
		expect(add(-100, 10)).toBe(-90);
	});

	it('should add negative numbers together', () => {
		expect(add(-1, -1)).toBe(-2);
		expect(add(-4, -2)).toEqual(-6);
	});
});