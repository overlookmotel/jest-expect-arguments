/* --------------------
 * jest-expect-arguments module
 * Tests
 * ------------------*/

'use strict';

// Modules
const jestExpectArguments = require('jest-expect-arguments');

// Init
require('./support/index.js');

// Tests

describe('tests', () => {
	it.skip('all', () => { // eslint-disable-line jest/no-disabled-tests
		expect(jestExpectArguments).not.toBeUndefined();
	});
});
