import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import HomePage from '@/app/page';

describe('testing home page', () => {
	it('should render home page', () => {
		render(<HomePage />);
		expect(screen.getByText('Initial Page')).toBeInTheDocument();
	});
});
