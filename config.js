module.exports = {
	allowedEnv: [
		'GO_*',
		'SOME_ENV',
		'MEND_VENDIR_GITHUB_API_TOKEN'
	],
	secrets: {
		SOME_ENV: 'foo',
		MEND_VENDIR_GITHUB_API_TOKEN: 'foo',
	}
}
