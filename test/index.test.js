/* --------------------
 * jest-expect-arguments module
 * Tests
 * ------------------*/

/* eslint-disable prefer-rest-params */

'use strict';

// Modules
const {printReceived} = require('jest-matcher-utils');
require('jest-expect-arguments');

// Tests

describe('expect.toBeArguments()', () => {
	describe('passes if receives', () => {
		it('empty arguments object', () => {
			const args = (function() { return arguments; }());
			expect(args).toBeArguments();
		});

		it('populated arguments object', () => {
			const args = (function() { return arguments; }(1, 2, 3));
			expect(args).toBeArguments();
		});
	});

	describe('fails if receives', () => {
		it('null', () => {
			expect(
				() => expect(null).toBeArguments()
			).toThrowWithMessage(
				Error, `expected ${printReceived(null)} to be an Arguments object`
			);
		});

		it('undefined', () => {
			expect(
				() => expect(undefined).toBeArguments()
			).toThrowWithMessage(
				Error, `expected ${printReceived(undefined)} to be an Arguments object`
			);
		});

		it('object', () => {
			expect(
				() => expect({}).toBeArguments()
			).toThrowWithMessage(
				Error, `expected ${printReceived({})} to be an Arguments object`
			);
		});

		it('object resembling arguments object', () => {
			expect(
				() => expect({0: 123, 1: 456, length: 2}).toBeArguments()
			).toThrowWithMessage(
				Error, `expected ${printReceived({0: 123, 1: 456, length: 2})} to be an Arguments object`
			);
		});

		it('array', () => {
			expect(
				() => expect([]).toBeArguments()
			).toThrowWithMessage(
				Error, `expected ${printReceived([])} to be an Arguments object`
			);
		});

		it('function', () => {
			const fn = function() {};
			expect(
				() => expect(fn).toBeArguments()
			).toThrowWithMessage(
				Error, `expected ${printReceived(fn)} to be an Arguments object`
			);
		});
	});
});

describe('expect.not.toBeArguments()', () => {
	describe('fails if receives', () => {
		it('empty arguments object', () => {
			const args = (function() { return arguments; }());
			expect(
				() => expect(args).not.toBeArguments()
			).toThrowWithMessage(
				Error, `expected ${printReceived(args)} not to be an Arguments object`
			);
		});

		it('populated arguments object', () => {
			const args = (function() { return arguments; }(1, 2, 3));
			expect(
				() => expect(args).not.toBeArguments()
			).toThrowWithMessage(
				Error, `expected ${printReceived(args)} not to be an Arguments object`
			);
		});
	});

	describe('passes if receives', () => {
		it('null', () => {
			expect(null).not.toBeArguments();
		});

		it('undefined', () => {
			expect(undefined).not.toBeArguments();
		});

		it('object', () => {
			expect({}).not.toBeArguments();
		});

		it('object resembling arguments object', () => {
			expect({0: 123, 1: 456, length: 2}).not.toBeArguments();
		});

		it('array', () => {
			expect([]).not.toBeArguments();
		});

		it('function', () => {
			expect(function() {}).not.toBeArguments(); // eslint-disable-line prefer-arrow-callback
		});
	});
});
