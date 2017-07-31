import { divide } from '../index';

describe('divide()', () => {
	it('should divide positive numbers together', () => {
		expect(divide(14, 7)).toBe(2);
		expect(divide(9, 3)).toBe(3);
	});

	it('should divide positive and negative numbers together', () => {
		expect(divide(-4, 2)).toBe(-2);
		expect(divide(100, -10)).toBe(-10);
	});

	it('should divide negative numbers together', () => {
		expect(divide(-1, -1)).toBe(1);
		expect(divide(-4, -2)).toBe(2);
	});
});
