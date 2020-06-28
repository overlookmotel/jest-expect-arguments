/* --------------------
 * jest-expect-arguments module
 * Tests ESLint config
 * ------------------*/

'use strict';

// Exports

module.exports = {
	extends: [
		'@overlookmotel/eslint-config-jest'
	],
	rules: {
		'import/no-unresolved': ['error', {ignore: ['^jest-expect-arguments$']}],
		'node/no-missing-require': ['error', {allowModules: ['jest-expect-arguments']}]
	}
};
