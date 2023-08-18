import type { ITodo } from '@/interfaces/todo';

import SimpleCard from './components/simple-card';

const getAll = async (): Promise<ITodo[]> => {
	const request = await fetch(process.env.GQL_URL!, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: `
            query GetAllTodos {
                todos {
                  id
                  title
                  completed
                }
              }
      `,
		}),
		next: { revalidate: 10 },
	});

	const response = (await request.json()) as {
		data: { todos: ITodo[] };
	};

	return response.data.todos;
};

const ExampleComponent = async (): Promise<React.JSX.Element> => {
	const todos = await getAll();

	return (
		<div>
			<h1 className="border p-5 text-center font-title text-xl font-bold">
				Example Component
			</h1>
			<main className="flex max-h-[85vh] flex-wrap items-center justify-around gap-3 overflow-y-scroll p-10  shadow-inner">
				{todos.map((t) => (
					<SimpleCard {...t} key={t.id} />
				))}
			</main>
		</div>
	);
};

export default ExampleComponent;
