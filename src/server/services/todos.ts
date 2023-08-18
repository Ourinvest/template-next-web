import type { CreateTodoInput } from '@dto/todos/create.input';
import { Service } from 'typedi';

import type { Todo } from '@/server/entities/todo';

@Service()
export class TodosService {
	private readonly baseUrl: string = process.env.API_URL!;

	async getAll(): Promise<Todo[]> {
		const response = await fetch(this.baseUrl);
		return (await response.json()) as Todo[];
	}

	async getOne(id: number): Promise<Todo> {
		const url = `${this.baseUrl}/${id}`;

		const response = await fetch(url);

		return (await response.json()) as Todo;
	}

	async create(createTodoInput: CreateTodoInput): Promise<Todo> {
		const { completed, title, userId } = createTodoInput;
		const options = {
			method: 'POST',
			body: JSON.stringify({ completed, title, userId }),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		};

		const response = await fetch(this.baseUrl, options);

		return (await response.json()) as Todo;
	}
}
