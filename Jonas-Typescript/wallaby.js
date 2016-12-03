module.exports = function (w) {
	return {
		files: [
			'src/**/*.ts',
			{ pattern: 'src/**/test/*.spec.ts', ignore: true }
		],
		tests: [
			'src/**/test/*.spec.ts'
		],
		env: { type: 'node' },
		testFramework: 'mocha'
	};
};
