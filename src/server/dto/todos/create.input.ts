import { InputType } from 'type-graphql';
import { Partial } from 'type-graphql-utils';

import { Todo } from '@/server/entities/todo';

@InputType()
export class CreateTodoInput extends Partial(Todo) {}
