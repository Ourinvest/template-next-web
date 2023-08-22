import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import HomePage from '@/app/page';
describe('Home Page', () => {
	it('should render home page', () => {
		render(<HomePage />);
		expect(screen.getByText('Initial Page')).toBeInTheDocument();
	});
});
