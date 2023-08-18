import 'reflect-metadata';

import { CreateTodoInput } from '@dto/todos/create.input';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import { Todo } from '@/server/entities/todo';
import { TodosService } from '@/server/services/todos';

@Service()
@Resolver(Todo)
export class TodoResolver {
	constructor(private readonly todoService: TodosService) {}

	@Query(() => [Todo])
	async todos(): Promise<Todo[] | void> {
		return this.todoService.getAll().then((response) => response);
	}

	@Query(() => Todo)
	async todo(@Arg('id') id: number): Promise<Todo | void> {
		return this.todoService.getOne(id).then((response) => response);
	}

	@Mutation(() => Todo)
	async createTodo(
		@Arg('createTodoInput', { validate: false })
		createTodoInput: CreateTodoInput,
	): Promise<Todo | void> {
		return this.todoService
			.create(createTodoInput)
			.then((response) => response);
	}
}
