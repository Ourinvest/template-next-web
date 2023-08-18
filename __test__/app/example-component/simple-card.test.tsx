import { render, screen } from '@testing-library/react';

import SimpleCard from '@/app/example-component/components/simple-card';

import {
	mockTodoComplete,
	mockTodoIncomplete,
} from '../mocks/example-component.mock';

describe('Simple Card', () => {
	it('Should render without crashing', () => {
		render(<SimpleCard {...mockTodoComplete} />);
	});

	it('Should render "Done" text if task is incomplete', () => {
		render(<SimpleCard {...mockTodoIncomplete} />);

		expect(screen.getByRole('button').textContent).toBe('Done');
	});

	it('Should render "Undo" text if task is complete', () => {
		render(<SimpleCard {...mockTodoComplete} />);

		expect(screen.getByRole('button').textContent).toBe('Undo');
	});
});
