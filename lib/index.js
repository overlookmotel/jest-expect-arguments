/* --------------------
 * jest-expect-arguments module
 * ------------------*/

/* global expect */

'use strict';

// Modules
const {printReceived} = require('jest-matcher-utils');

// Extend `expect`

const objectToString = Object.prototype.toString;
expect.extend({
	toBeArguments(received) {
		const pass = objectToString.call(received) === '[object Arguments]';

		return {
			message: () => `expected ${printReceived(received)}${pass ? ' not' : ''} to be an Arguments object`,
			pass
		};
	}
});
