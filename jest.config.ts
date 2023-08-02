import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
	dir: './',
});

const coveragePercentage = 92;

const config: Config = {
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.ts?(x)'],
	coveragePathIgnorePatterns: ['/node_modules/'],
	coverageReporters: ['text', 'html'],
	coverageThreshold: {
		global: {
			branches: coveragePercentage,
			functions: coveragePercentage,
			lines: coveragePercentage,
			statements: coveragePercentage,
		},
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testEnvironment: 'jest-environment-jsdom',
};

export default createJestConfig(config);
