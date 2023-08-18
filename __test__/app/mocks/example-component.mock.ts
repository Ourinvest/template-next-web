import type { ITodo } from '@/interfaces/todo';

export const mockTodoComplete: ITodo = {
	completed: true,
	id: 300,
	title: 'Test ToDo Complete',
	userId: 50,
};
export const mockTodoIncomplete: ITodo = {
	completed: false,
	id: 300,
	title: 'Test ToDo Incomplete',
	userId: 50,
};
