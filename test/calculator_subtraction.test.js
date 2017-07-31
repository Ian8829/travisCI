import { subtract } from '../';

describe('subtract()', () => {
	it('should subtract positive numbers together', () => {
		expect(subtract(1, 2)).toEqual(-1);
		expect(subtract(3, 2)).toEqual(1);
	});

	it('should subtract positive and negative numbers together', () => {
		expect(subtract(-1, 1)).toEqual(-2);
		expect(subtract(10, -100)).toEqual(110);
	});

	it('should subtract negative numbers together', () => {
		expect(subtract(-1, -1)).toBe(0);
		expect(subtract(-4, -2)).toBe(-2);
	});
});
