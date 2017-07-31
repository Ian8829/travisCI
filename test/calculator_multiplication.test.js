import { multiply } from '../';

describe('multiply()', () => {
	it('should multiply positive numbers together', () => {
		expect(multiply(2, 3)).toBe(6);
	});

	it('should multiply positive and negative numbers together', () => {
		expect(multiply(-2, -3)).toBe(6);
	});

	it('should multiply negative numbers together', () => {
		expect(multiply(2, -3)).toBe(-6);
	});
});
