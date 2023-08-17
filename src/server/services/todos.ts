import type { CreateTodoInput } from '@dto/todos/create.input';
import { Service } from 'typedi';

import type { Todo } from '@/server/entities/todo';

@Service()
export class TodosService {
	private readonly baseUrl: string;

	constructor() {
		this.baseUrl = process.env.API_URL!;
	}

	async getAll(): Promise<Todo[]> {
		try {
			const response = await fetch(this.baseUrl);
			return (await response.json()) as Todo[];
		} catch (error) {
			throw new Error(error);
		}
	}

	async getOne(id: number): Promise<Todo> {
		try {
			const response = await fetch(`${this.baseUrl}/${id}`);
			return (await response.json()) as Todo;
		} catch (error) {
			throw new Error(error);
		}
	}

	async create(createTodoInput: CreateTodoInput): Promise<Todo> {
		try {
			const response = await fetch(this.baseUrl, {
				method: 'POST',
				body: JSON.stringify({ createTodoInput }),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			});

			return (await response.json()) as Todo;
		} catch (error) {
			throw new Error(error);
		}
	}
}
