import { render, screen } from '@testing-library/react';

import ExampleComponent from '@/app/example-component/page';

import { mockTodoComplete } from '../mocks/example-component.mock';

describe('Example Component', () => {
	it('Should render without crashing', async () => {
		global.fetch = jest.fn().mockResolvedValue({
			json: jest.fn().mockResolvedValue({
				data: { todos: [mockTodoComplete] },
			}),
		});

		const page = await ExampleComponent();

		render(page);

		expect(screen.getByText(/example component/i)).toBeInTheDocument();
		expect(screen.getByRole('main')).toBeInTheDocument();
	});
});
