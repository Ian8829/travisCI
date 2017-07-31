import { assert } from 'chai';
import { multiply } from '../';

describe('multiply()', () => {
	it('should multiply positive numbers together', () => {
		assert.equal(multiply(2, 3), 6);
	});

	it('should multiply positive and negative numbers together', () => {
		assert.equal(multiply(-2, 3), -6);
	});

	it('should multiply negative numbers together', () => {
		assert.equal(multiply(-2, -3), 6);
	});
});
