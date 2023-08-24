export default {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			['feat', 'bug', 'hotfix', 'refactor', 'doc', 'test', 'chore'],
		],
	},
};
