import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Exchange {
	@Field(() => String)
	id: string;
}
