module.exports = {
	glboalExtends: [
		"global:safeEnv"
	],
	allowedEnv: [
		'SOME_ENV',
		'MEND_VENDIR_GITHUB_API_TOKEN'
	],
	secrets: {
		SOME_ENV: 'foo',
		MEND_VENDIR_GITHUB_API_TOKEN: 'foo',
	}
}
