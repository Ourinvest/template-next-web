export interface ITodo {
	completed: boolean;
	id: number;
	title: string;
	userId: number;
}

export type TCreateTodoInput = Partial<ITodo>;
